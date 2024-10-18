const { error } = require("console");
const Post = require("../models/post");

// Load organization model
const Posts = require("../models/post");

exports.getPosts = async (req, res) => {
  Posts.find()
    .then((post) => res.json(post))
    .catch((err) =>
      res.status(404).json({ noorganizationfound: "No Posts found" })
    );
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

exports.deletePost = async (req, res) => {
  Posts.deleteOne({ _id: req.params.id })
    .then((post) => res.json(post))
    .catch((err) =>
      res.status(404).json({ noorganizationfound: "Post Can not be Deleted" })
    );
};

exports.updatePost = async (req, res) => {
  const filter = { _id: req.params.id };
  const update = req.body;

  Posts.findOneAndUpdate(filter, update, {
    new: true,
  })
    .then((post) => {
      res.json(post._doc);
    })
    .catch((err) => {
      res.status(400).json({
        message: err,
      });
    });
};
