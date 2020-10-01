import mongoose from "mongoose";
const uniqueValidator = require("mongoose-unique-validator");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name for this pet."],
    maxlength: [20, "Name cannot be more than 60 characters"],
  },
  email: {
    type: String,
    required: [true, "Please provide a name for this pet."],
    maxlength: [20, "Email cannot be more than 60 characters"],
    unique: true,
  },
  password: {
    type: String,
    minlength: [5, "Password must be min 5 characters"],
  },
  notes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Note",
    },
  ],
});
UserSchema.plugin(uniqueValidator);
UserSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    // the passwordHash should not be revealed
    //delete returnedObject.password;
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
