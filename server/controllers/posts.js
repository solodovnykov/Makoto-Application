import express from "express";
import mongoose from "mongoose";

import PostMakoto from "../models/postMakoto.js";

export const getPosts = async (req, res) => {
  try {
    const postMakoto = await PostMakoto.find();

    res.status(200).json(postMakoto);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;

  const newPost = new PostMakoto(post);

  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No posts with that ID :(");

  const updatedPost = await PostMakoto.findByIdAndUpdate(
    _id,
    { ...post, _id },
    {
      new: true,
    }
  );

  res.json(updatePost);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No posts with that ID :(");

  await PostMakoto.findByIdAndRemove(id);

  res.json({ message: "Post deleted is successfully" });
};
