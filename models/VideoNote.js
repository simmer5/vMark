const mongoose = require("mongoose");

const VideoNoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a title"],
    trim: true,
    maxlength: [40, "Max length 40 characters"],
  },
  link: {
    type: String,
    required: false,
    trim: true,
  },
  description: {
    type: String,
    required: false,
    maxlength: [400, "Max length is 400 characters"],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports =
  mongoose.models.VideoNote || mongoose.model(VideoNote, VideoNoteSchema);
