// routes/commentRoutes.js
const express = require("express");
const router = express.Router();
const commentController = require("../controllers/comment");

// יצירת תגובה חדשה
router.post("/", (req, res) => {
  commentController.createComment(req, res);
});

// קבלת כל התגובות או לפי ID של פוסט
router.get("/", (req, res) => {
  commentController.getAllComments(req, res);
});

// קבלת תגובה לפי ID
router.get("/:id", (req, res) => {
  commentController.getCommentById(req, res);
});

// עדכון תגובה
router.put("/:id", (req, res) => {
  commentController.updateComment(req, res);
});

// מחיקת תגובה
router.delete("/:id", (req, res) => {
  commentController.deleteComment(req, res);
});

module.exports = router;
