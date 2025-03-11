import express from "express";
import {
  getAllSizesOfProduct,
  saveNewProductSize,
  updateProductSize,
  updateProductSizeStatus,
} from "../../../../controller/admin/product/size/product-size.controller";
import verifyToken from "../../../../middleware/admin.middleware";

const productSizeRouter = express.Router();

productSizeRouter.get(
  "/all-sizes/:productId",
  verifyToken,
  getAllSizesOfProduct,
);

productSizeRouter.post("/create", verifyToken, saveNewProductSize);

productSizeRouter.put("/update/:productId", verifyToken, updateProductSize);

productSizeRouter.put(
  "/update-status/:productId",
  verifyToken,
  updateProductSizeStatus,
);

export default productSizeRouter;
