import express from "express";
import verifyToken from "../../../../middleware/admin.middleware";
import {
  getAllImagesOfProduct,
  saveNewImage,
} from "../../../../controller/admin/product/image/image.controller";

const adminImageRouter = express.Router();

adminImageRouter.post("/create", verifyToken, saveNewImage);
adminImageRouter.get(
  "/get-images/:productId",
  verifyToken,
  getAllImagesOfProduct,
);

export default adminImageRouter;
