import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  tags: [String],
  selectedFile: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMakoto = mongoose.model("PostMakoto", postSchema);

export default PostMakoto;
