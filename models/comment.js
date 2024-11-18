// models/comment.js
const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
    required: true,
  },
  sender: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,  // תוסיף תאריכים אוטומטיים לתגובה
});

module.exports = mongoose.model("Comment", commentSchema);
