import { Request, Response } from "express";
import Admin from "../../../schema/admin/admin/admin.schema";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createNewAdmin = async (req: Request, res: Response) => {
  try {
    const saltRounds = 10;
    const password = req.body.password;

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    if (hashedPassword) {
      req.body.password = hashedPassword;

      const saveNewAdmin = await Admin.create(req.body);
      if (saveNewAdmin) {
        res.status(200).send({
          response: "New admin created successfully",
        });
      } else {
        res.status(200).send({ response: "Failed to create new admin" });
      }
    }
  } catch (error) {
    res
      .status(500)
      .send({ response: "Server error, failed to create new admin" });
  }
};

export const adminLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const verifyEmail = await Admin.findOne({ email: email });

    if (!verifyEmail) {
      res.status(200).send({ response: "Email not found" });
    }

    const saltRounds = 10;

    const verifyPassword = await bcrypt.compare(
      password,
      verifyEmail?.password,
    );

    if (!verifyPassword) {
      res
        .status(200)
        .send({ response: "Incorrect password, please try again." });
    }

    const JwtSecretKey = process.env.JWT_SECRET_KEY;

    if (verifyEmail) {
      const authToken = jwt.sign(
        { id: verifyEmail._id, email: verifyEmail?.email },
        JwtSecretKey,
        { expiresIn: "1d" },
      );

      if (authToken) {
        res
          .status(200)
          .send({ response: "logged in successfull", auth_token: authToken });
      }
    }
  } catch (error) {
    res.status(500).send({ response: "Server error, failed to login" });
  }
};
