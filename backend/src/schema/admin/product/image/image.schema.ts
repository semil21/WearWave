import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  image: {
    type: String,
    require: true,
  },
  precedence: {
    type: Number,
    deault: 0,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

const Image = mongoose.model("Image", imageSchema);

export default Image;
