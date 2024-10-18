const express = require("express");
const router = express.Router();
const postController = require('../../controllers/PostController')


router.get("/",postController.getPosts);
router.post("/",postController.createPosts);
router.put("/:id",postController.updatePost);
router.delete("/:id",postController.deletePost);



module.exports = router;
