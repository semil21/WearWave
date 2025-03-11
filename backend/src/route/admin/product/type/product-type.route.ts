import express from "express";
import verifyToken from "../../../../middleware/admin.middleware";
import {
  getAllTypes,
  saveNewType,
  updateType,
} from "../../../../controller/admin/product/type/product-type.controller";

const ProductTypeRouter = express.Router();

ProductTypeRouter.get("/", verifyToken, getAllTypes);

ProductTypeRouter.post("/create", verifyToken, saveNewType);

ProductTypeRouter.put("/update/:typeId", verifyToken, updateType);

export default ProductTypeRouter;
