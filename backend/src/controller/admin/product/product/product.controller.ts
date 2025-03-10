import expressAsyncHandler from "express-async-handler";
import { Request, Response } from "express";
import Product from "../../../../schema/admin/product/product/product.schema";

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

export const updateProduct = expressAsyncHandler(
  async (req: Request, res: Response) => {
    try {
      const { productId } = req.params;

      const updateProductRecord = await Product.findByIdAndUpdate(
        { _id: productId },
        req.body,
        { new: true },
      );

      if (updateProductRecord) {
        res.status(200).send({ response: updateProductRecord });
      } else {
        res.status(400).send({ response: "Failed to update product" });
      }
    } catch (error) {
      res
        .status(500)
        .send({ response: "Server error, failed to updateb product" });
    }
  },
);

export const updateProductStatus = expressAsyncHandler(
  async (req: Request, res: Response) => {
    try {
      const { productId } = req.params;
      const { status } = req.body;

      const updatedStatus = status === true ? false : true;

      const updateProductStatusRecord = await Product.findByIdAndUpdate(
        { _id: productId },
        { status: updatedStatus },
        { new: true },
      );

      if (updateProductStatusRecord) {
        res.status(200).send({ response: updateProductStatusRecord?.status });
      } else {
        res.status(400).send({ response: "Failed to update product status" });
      }
    } catch (error) {
      res
        .status(500)
        .send({ response: "Server error, failed to update product status" });
    }
  },
);
