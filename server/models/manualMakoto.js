import mongoose from "mongoose";

const manualSchema = mongoose.Schema({
  title: String,
  message: String,
  selectedFile: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const ManualMakoto = mongoose.model("ManualMakoto", manualSchema);

export default ManualMakoto;
