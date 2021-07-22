import express from "express";
import mongoose from "mongoose";

import PostMakoto from "../models/postMakoto.js";

export const getPosts = async (req, res) => {
  const { page } = req.query;
  try {
    if (page !== 'undefined') {
      const LIMIT = 6;
      const startIndex = (Number(page) - 1) * LIMIT;
      const total = await PostMakoto.countDocuments({});

      const posts = await PostMakoto.find()
        .sort({ _id: -1 })
        .limit(LIMIT)
        .skip(startIndex);

      res.status(200).json({
        data: posts,
        currentPage: Number(page),
        numberOfPages: Math.ceil(total / LIMIT),
      });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await PostMakoto.findById(id);

    res.status(200).json(post);
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

export const getPostsBySearch = async (req, res) => {
  const { searchQuery, tags } = req.query;

  try {
    const title = new RegExp(searchQuery, "i");

    const posts = await PostMakoto.find({
      $or: [{ title }, { tags: { $in: tags.split(",") } }],
    });

    res.json({ data: posts });
  } catch (error) {
    res.status(404).json({ message: error });
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
