import express from "express";
import verifyToken from "../../../middleware/admin.middleware";
import {
  createNewProduct,
  getAllProducts,
} from "../../../controller/admin/product/product.controller";

const adminProductRouter = express.Router();

adminProductRouter.get("/", verifyToken, getAllProducts);
adminProductRouter.post("/create", verifyToken, createNewProduct);

export default adminProductRouter;
