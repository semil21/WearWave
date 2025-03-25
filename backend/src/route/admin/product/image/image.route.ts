import express from "express";
import verifyToken from "../../../../middleware/admin.middleware";
import {
  getAllImagesOfProduct,
  saveNewImage,
} from "../../../../controller/admin/product/image/image.controller";
import { multerImageUpload } from "../../../../middleware/disk-image-upload.middleware";

const adminImageRouter = express.Router();

adminImageRouter.post("/create", multerImageUpload, saveNewImage);
adminImageRouter.get(
  "/get-images/:productId",
  verifyToken,
  getAllImagesOfProduct,
);

export default adminImageRouter;
