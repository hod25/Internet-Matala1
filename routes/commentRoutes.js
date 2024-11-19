// routes/commentRoutes.js
const express = require("express");
const router = express.Router();
const controller = require("../controllers/comments");

// קבלת פוסטים לפי שולח או את כל הפוסטים אם אין פרמטרים
router.get('/', (req, res) => {
  if (req.query.sender) {
      // אם יש פרמטר sender בשאילתא, קבל פוסטים לפי שולח
      controller.getCommentById(req, res);
  } else {
      // אם אין פרמטרים בשאילתא, קבל את כל הפוסטים
      controller.getAllComments(req, res);
  }
});

router.get("/:_id", (req, res) => {
  controller.getCommentById(req, res);
});
  
router.post("/", (req, res) => {
  controller.createComment(req, res);
});

router.put("/:_id", (req, res) => {
  controller.updateComment(req, res);
});
  
// router.delete("/:_id", (req, res) => {
//   controller.deleteComment(req, res);
// });

router.delete("/:id", (req, res) => {
  controller.deleteComment(req, res);
});

module.exports = router;