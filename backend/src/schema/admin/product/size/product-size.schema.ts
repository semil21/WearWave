import mongoose from "mongoose";

const productSizeSchema = new mongoose.Schema({
  size: {
    type: String,
    require: true,
  },
  quantity: {
    type: Number,
    require: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

const ProductSize = mongoose.model("ProductSize", productSizeSchema);

export default ProductSize;
