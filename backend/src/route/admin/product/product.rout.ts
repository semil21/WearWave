import express from "express";
import verifyToken from "../../../middleware/admin.middleware";
import {
  createNewProduct,
  getAllProducts,
  updateProduct,
  updateProductStatus,
} from "../../../controller/admin/product/product.controller";

const adminProductRouter = express.Router();

adminProductRouter.get("/", verifyToken, getAllProducts);

adminProductRouter.post("/create", verifyToken, createNewProduct);

adminProductRouter.put(
  "/update-product/:productId",
  verifyToken,
  updateProduct,
);

adminProductRouter.put(
  "/update-status/:productId",
  verifyToken,
  updateProductStatus,
);

export default adminProductRouter;
