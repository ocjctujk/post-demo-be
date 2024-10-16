const { error } = require("console");
const Post = require("../models/post");
const Post = require("../models/post");

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("comments");
    res.json(posts);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

exports.createPosts = async (req, res) => {
  const post = new Post(req.body);
  try {
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};
