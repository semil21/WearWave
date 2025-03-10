import expressAsyncHandler from "express-async-handler";
import Product from "../../../schema/admin/product/product.schema";
import { Request, Response } from "express";

export const createNewProduct = expressAsyncHandler(
  async (req: Request, res: Response) => {
    try {
      const saveNewProduct = await Product.create(req.body);

      if (saveNewProduct) {
        res.status(200).send({ response: saveNewProduct });
      } else {
        res.status(400).send({ response: "Failed to add new product" });
      }
    } catch (error) {
      res
        .status(500)
        .send({ response: "Server error, failed to add new product" });
    }
  },
);

export const getAllProducts = expressAsyncHandler(
  async (req: Request, res: Response) => {
    try {
      const fetchAllProductsRecord = await Product.find().lean();

      if (fetchAllProductsRecord) {
        res.status(200).send({ response: fetchAllProductsRecord });
      } else {
        res.status(400).send({ response: "Failed to fetch all products" });
      }
    } catch (error) {
      res
        .status(500)
        .send({ response: "Server error, failed to get all products" });
    }
  },
);
