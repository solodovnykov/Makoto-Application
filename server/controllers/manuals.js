import express from "express";
import mongoose from "mongoose";

import ManualMakoto from "../models/manualMakoto.js";

export const getManuals = async (req, res) => {
  const { page } = req.query;
  try {
    if (page !== "undefined") {
      const LIMIT = 6;
      const startIndex = (Number(page) - 1) * LIMIT;
      const total = await ManualMakoto.countDocuments({});

      const posts = await ManualMakoto.find()
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

export const getManual = async (req, res) => {
  const { id } = req.params;

  try {
    const manual = await ManualMakoto.findById(id);

    res.status(200).json(manual);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createManuals = async (req, res) => {
  const post = req.body;

  const newManual = new ManualMakoto(post);

  try {
    await newManual.save();

    res.status(201).json(newManual);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateManual = async (req, res) => {
  const { id: _id } = req.params;
  const manual = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No posts with that ID :(");

  const updatedManual = await ManualMakoto.findByIdAndUpdate(
    _id,
    { ...manual, _id },
    {
      new: true,
    }
  );

  res.json(updateManual);
};

export const deleteManual = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No posts with that ID :(");

  await ManualMakoto.findByIdAndRemove(id);

  res.json({ message: "Post deleted is successfully" });
};
