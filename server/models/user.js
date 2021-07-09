import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, requered: true },
  login: { type: String, requered: true },
  password: { type: String, requered: true },
  isAdmin: { type: Boolean, default: false, required: true },
  id: { type: String },
});

export default mongoose.model("User", userSchema);
