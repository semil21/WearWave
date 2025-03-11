import mongoose from "mongoose";

const productTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    default: true,
  },
});

const Types = mongoose.model("Types", productTypeSchema);

export default Types;
