import expressAsyncHandler from "express-async-handler";
import { Request, Response } from "express";
import Types from "../../../../schema/admin/product/type/product-type.schema";

export const saveNewType = expressAsyncHandler(
  async (req: Request, res: Response) => {
    try {
      const saveType = await Types.create(req.body);

      if (saveType) {
        res.status(200).send({ response: saveType });
      } else {
        res.status(400).send({ response: "Failed to save new type" });
      }
    } catch (error) {
      res
        .status(500)
        .send({ response: "Server error, failed to save new type" });
    }
  },
);

export const getAllTypes = expressAsyncHandler(
  async (req: Request, res: Response) => {
    try {
      const fetchAllType = await Types.find().lean();

      if (fetchAllType) {
        res.status(200).send({ response: fetchAllType });
      } else {
        res.status(400).send({ response: "Failed to get all types" });
      }
    } catch (error) {
      res
        .status(500)
        .send({ response: "Server error, failed to get all types" });
    }
  },
);

export const updateType = expressAsyncHandler(
  async (req: Request, res: Response) => {
    try {
      const { typeId } = req.params;

      const updateTypeRecord = await Types.findByIdAndUpdate(
        { _id: typeId },
        req.body,
        { new: true },
      );

      if (updateTypeRecord) {
        res.status(200).send({ response: updateTypeRecord });
      } else {
        res.status(200).send({ response: "Failed to update type" });
      }
    } catch (error) {
      res.status(500).send({ response: "Server error, faile to update type" });
    }
  },
);
