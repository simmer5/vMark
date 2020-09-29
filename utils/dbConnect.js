/* This is a database connection function*/
import mongoose from "mongoose";

const connection = {}; /* creating connection object*/
console.log("====Connectin to DB starts====");
async function dbConnect() {
  /* check if we have connection to our databse*/
  if (connection.isConnected) {
    return;
  }

  /* connecting to our database */
  const db = await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

  connection.isConnected = db.connections[0].readyState;

  console.log("====Connected to DB =====");
}

export default dbConnect;
