import { loginType } from "@/app/types/login.type";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const loginService = async (data: loginType) => {
  try {
    const verifyLogin = await axios.post(
      `${process.env.NEXT_PUBLIC_DB_URL}/admin/login`,
      data,
    );

    const loginInfo = await verifyLogin.data;
    return loginInfo;
  } catch (error) {
    throw error;
  }
};
