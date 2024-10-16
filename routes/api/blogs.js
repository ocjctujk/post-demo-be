const express = require("express");
const router = express.Router();

// Load organization model
const Posts = require("../../models/post");
const Post = require("../../models/post");

router.get("/", (req, res) => {
  Posts.find()
    .then((post) => res.json(post))
    .catch((err) =>
      res.status(404).json({ noorganizationfound: "No Posts found" })
    );
});

module.exports = router;
