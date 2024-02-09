/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import CloseModal from "@/components/CloseModal";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

const page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data: any) => {
    const yoyo = await fetch("/api/auth", { method: "POST", body: JSON.stringify(data) });
    const yoyo2 = await yoyo.json();
    console.log("res baby", yoyo2.data);
    return yoyo2;
  };

  return (
    <div className="absolute h-screen w-screen overflow-hidden bg-[#000000de]">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="rounded-md border-gray-300 bg-gray-100">
          <div className="flex w-full items-center justify-end p-2">
            <CloseModal />
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col  items-center justify-center gap-4 rounded-md p-10 pt-0">
            <h1 className="text-2xl font-medium">Login</h1>
            <input
              {...register("email", {
                required: "required baby",
                minLength: { value: 10, message: "enter 10 baby" },
                validate: (value) => {
                  if (!value.includes("@")) {
                    return "should have an @";
                  }
                  return true;
                },
              })}
              className="rounded-md border border-gray-300 p-2"
              type="text"
              placeholder="Email"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            <input
              {...register("password", { required: true, minLength: 8 })}
              className="rounded-md border border-gray-300 p-2"
              type="password"
              placeholder="Password"
            />
            <Button variant={"outline"} type="submit">
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default page;
