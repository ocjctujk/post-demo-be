const express = require("express");
const router = express.Router();
const postController = require("../../controllers/PostController");
const commentsController = require("../../controllers/CommentController");

router.get("/posts", postController.getPosts);
router.post("/posts", postController.createPosts);
router.put("/posts/:id", postController.updatePost);
router.delete("/posts/:id", postController.deletePost);

router.get("/posts/:postId/comments", commentsController.getComments);
router.post("/comments", commentsController.createComment);

module.exports = router;
