// controllers/commentController.js
const Comment = require("../models/comment");

const createComment = async (req, res) => {
  try {
    const newComment = new Comment(req.body);
    const savedComment = await newComment.save();
    res.status(201).json(savedComment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getCommentById = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) return res.status(404).json({ message: "Comment not found" });
    res.json(comment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateComment = async (req, res) => {
  const commentId = req.params._id; // מזהה התגובה מהפרמטרים ב-URL
  const updateData = req.body; // הנתונים המעודכנים מהבקשה

  try {
    const comment = await Comment.findById(commentId); // חיפוש התגובה לפי מזהה
    if (!comment) {
      return res.status(404).send("Comment not found"); // אם התגובה לא נמצאה
    }

    const updatedComment = await Comment.findByIdAndUpdate(commentId, updateData, { new: true }); // עדכון התגובה
    res.send(updatedComment); // שליחת התגובה שעודכנה
  } catch (error) {
    res.status(400).send(error.message); // החזרת שגיאה במקרה של בעיה
  }
};


const deleteComment = async (req, res) => {
  const commentId = req.params._id; // מזהה התגובה מהפרמטרים ב-URL

  try {
    const deletedComment = await Comment.findByIdAndDelete(commentId); // מחיקת התגובה לפי מזהה
    if (!deletedComment) {
      return res.status(404).json({ message: "Comment not found" }); // אם התגובה לא נמצאה
    }

    res.json({ message: "Comment deleted successfully" }); // אישור המחיקה
  } catch (err) {
    res.status(500).json({ message: err.message }); // טיפול בשגיאות
  }
};


module.exports = {
  createComment,
  getAllComments,
  getCommentById,
  updateComment,
  deleteComment
};

