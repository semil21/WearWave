import express from "express";
import {
  getAllSizesOfProduct,
  saveNewProductSize,
} from "../../../../controller/admin/product/size/product-size.controller";
import verifyToken from "../../../../middleware/admin.middleware";

const productSizeRouter = express.Router();

productSizeRouter.get(
  "/all-sizes/:productId",
  verifyToken,
  getAllSizesOfProduct,
);

productSizeRouter.post("/create", verifyToken, saveNewProductSize);

export default productSizeRouter;
