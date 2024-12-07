const express = require("express");
const router = express.Router();
const controller = require("../controllers/post");

// קבלת פוסטים לפי שולח או את כל הפוסטים אם אין פרמטרים
router.get('/', (req, res) => {
  if (req.query.sender) {
      // אם יש פרמטר sender בשאילתא, קבל פוסטים לפי שולח
      controller.getPostsBySender(req, res);
  } else {
      // אם אין פרמטרים בשאילתא, קבל את כל הפוסטים
      controller.getAllPosts(req, res);
  }
});

router.get("/:_id", (req, res) => {
  controller.getPostsById(req, res);
});
  
router.post("/", (req, res) => {
  controller.createPost(req, res);
});

router.put("/:_id", (req, res) => {
  controller.updatePost(req, res);
});
  
module.exports = router;