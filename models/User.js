const mongoose = require("mongoose");
//const uniqueValidator = require("mongoose-unique-validator");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [4, "Min length is 4"],
  },
  // email: {
  //   type: String,
  //   pattern: "^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$",
  //   description: "must be a string and match the regular expression pattern",
  //   unique: true,
  // },
  // passwordHash: {
  //   type: String,
  //   minlength: 3,
  //   required: true,
  // },
  // videoNotes: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "VideoNote",
  //   },
  // ],
});
//userSchema.plugin(uniqueValidator);

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
