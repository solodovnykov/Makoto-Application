import express from "express";

import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  getPost,
  getPostsBySearch,
} from "../controllers/posts.js";

const router = express.Router();

router.get("/search", getPostsBySearch);
router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;
