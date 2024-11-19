// models/comment.js
const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    _id:Number,
    title: {
      type: String,
      required: true,
    },
    content: String,
    sender: {
      type: String,
      required: true,
    },
  });

module.exports = mongoose.model("Comment", commentSchema);
