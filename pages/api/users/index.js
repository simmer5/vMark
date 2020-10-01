const bcrypt = require("bcrypt");
import dbConnect from "../../../utils/dbConnect";
import User from "../../../models/User";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const user = await User.find({}).populate("notes", {
          title: 1,
          description: 1,
        });
        res.status(200).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const body = req.body;
        const saltRounds = 10;
        const passwordHash = await bcrypt.hash(body.password, saltRounds);
        const withHashedPassword = { ...body, password: passwordHash };

        const user = await User.create(withHashedPassword);
        console.log("Cia naujas obj su hash pasvordu", withHashedPassword);
        res.status(201).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
