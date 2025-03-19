"use client";
import { useLoginHook } from "@/app/hooks/login.hook";
import { loginType } from "@/app/types/login.type";
import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { AxiosError } from "axios";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate, isPending } = useLoginHook();

  const onSubmit = async (data: loginType) => {
    mutate(data, {
      onSuccess: () => {
        toast.success("Logged in successfully! Welcome Back.", {
          position: "top-center",
          autoClose: 5000,
        });
      },
      onError: (error: unknown) => {
        if (error instanceof AxiosError) {
          const responseData = error.response?.data as { response: string };
          toast.error(`${responseData.response}`, {
            position: "top-center",
            autoClose: 4000,
          });
        }
      },
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 sm:px-10 lg:px-32">
      <ToastContainer />
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        <div className="hidden md:flex md:w-1/2 bg-blue-600 flex-col justify-center items-center text-white p-6">
          <h1 className="text-4xl font-bold mb-4 text-center">Welcome Back!</h1>
          <p className="text-lg text-center">
            Sign in and explore your business insgihts.
          </p>
        </div>

        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
            Log In
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <div className="flex flex-col gap-2">
              <label className="text-sm md:text-base font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-600 text-sm">Email is required</span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm md:text-base font-medium">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-600 text-sm">
                  Password is required
                </span>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md text-lg hover:bg-blue-600 transition duration-300"
              disabled={isPending}
            >
              {isPending ? "Logging in" : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
