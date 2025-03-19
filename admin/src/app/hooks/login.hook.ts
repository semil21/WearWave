import { useMutation } from "@tanstack/react-query";
import { loginService } from "../_service/login/login.service";

export const useLoginHook = () => {
  return useMutation({
    mutationFn: loginService,
  });
};
