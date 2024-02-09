"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "sonner";

type Inputs = {
  email: string;
  password: string;
  title: string;
  subtitle: string;
  description: string;
};
const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data: any) => {
    const yoyo = await fetch("/api/post", { method: "POST", body: JSON.stringify(data) });
    const yoyo2 = await yoyo.json();
    console.log("res baby", yoyo2.data);
    return yoyo2;
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center">
      <div className="b-stone-100 my-[10vh] flex flex-col items-center justify-center gap-4 rounded-lg border-2 border-stone-100 bg-stone-50 p-10">
        <h1 className="text-4xl font-semibold text-stone-600">Add new Job Post</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col items-center justify-center gap-2 rounded-md">
          <h1 className="w-full text-start text-stone-400">Enter title</h1>
          <input
            {...register("title", {
              required: "Field Required",
            })}
            className="w-full rounded-md border border-gray-300 p-2"
            type="text"
            placeholder="title"
          />
          {errors.title && <p className="w-full text-start text-red-500">{errors.title.message}</p>}
          <h1 className="w-full text-start text-stone-400">Enter subtitle</h1>
          <input
            {...register("subtitle", {
              required: "Field Required",
            })}
            className="w-full rounded-md border border-gray-300 p-2"
            type="text"
            placeholder="subtitle"
          />
          {errors.subtitle && <p className="w-full text-start text-red-500">{errors.subtitle.message}</p>}
          <h1 className="w-full text-start text-stone-400">Enter description</h1>
          <textarea
            {...register("description", {
              required: "Field Required",
            })}
            className="max-h-96 min-h-96 w-full rounded-md border border-gray-300 p-2 sm:w-[70vw]"
            placeholder="description"
          />
          {errors.description && <p className="w-full text-start text-red-500">{errors.description.message}</p>}
          <Button variant={"default"} type="submit">
            Post
          </Button>
          {/* <ClipLoader color={"white"} size={15} aria-label="Loading Spinner" data-testid="loader" /> */}
        </form>
      </div>
      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Toast
      </Button>
    </main>
  );
};

export default Home;
