const PostModel = require("../models/posts_model");

const getAllPosts = async (req, res) => {
  try {
    const posts = await PostModel.find();
    res.send(posts);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const getPostsById = async (req, res) => {
  const postId = req.params._id;
  try {
    const post = await PostModel.findById(postId);
    if (post) {
      res.send(post);
    } else {
      res.status(404).send("Post not found");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const createPost = async (req, res) => {
  const postBody = req.body;
  try {
    const post = await PostModel.create(postBody);
    res.status(201).send(post);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updatePost = async (req, res) => {
  const postId = req.params._id; 
  const updateData = req.body; 
  try {
    const post = await PostModel.findById(postId);
    if (!post) {
      return res.status(404).send("Post not found");
    }
    const updatedPost = await PostModel.findByIdAndUpdate(postId, updateData, { new: true });   
    res.send(updatedPost);
  } catch (error) {
    res.status(400).send(error.message);
  }
};


const getPostsBySender = async (req, res) => {
  const filter = req.query.sender;
  try {
    const posts = await PostModel.find({ sender: filter });
    res.send(posts);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getAllPosts,
  getPostsById,
  createPost,
  updatePost,
  getPostsBySender
};