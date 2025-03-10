import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(400).send({ response: "Token not found" });
    }

    const jwtSecretKet = process.env.JWT_SECRET_KEY;

    const authenticeJWtToken = jwt.verify(
      token,
      jwtSecretKet,
      (err, decoded) => {
        if (err) {
          return res
            .status(401)
            .json({ message: "Unauthorized: Invalid token" });
        }

        const { id, email } = decoded as { id: string; email: string };

        req.body.id = id;
        req.body.email = email;

        next();
      },
    );
  } catch (error) {
    res.status(500).send({ response: "Server error, failed to verify token" });
  }
};

export default verifyToken;
