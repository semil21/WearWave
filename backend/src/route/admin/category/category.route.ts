import express from "express";
import {
  createNewCategory,
  getAllCategories,
  updateCategory,
  updateCategoryStatus,
} from "../../../controller/admin/category/category.controller";
import verifyToken from "../../../middleware/admin.middleware";

const adminCategoryRouter = express.Router();

adminCategoryRouter.get("/", verifyToken, getAllCategories);
adminCategoryRouter.post("/create", verifyToken, createNewCategory);
adminCategoryRouter.put("/update/:categoryId", verifyToken, updateCategory);
adminCategoryRouter.put(
  "/update-status/:categoryId",
  verifyToken,
  updateCategoryStatus,
);

export default adminCategoryRouter;
