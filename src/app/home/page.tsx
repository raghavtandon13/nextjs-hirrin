"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

type Inputs = {
  title: string;
  subtitle: string;
  description: string;
};
const Home = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data: any) => {
    await fetch("/api/post", { method: "POST", body: JSON.stringify(data) });
    if (isSubmitSuccessful) {
      reset();
      toast("Event has been created");
    }
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <div className="b-stone-100 flex h-full w-full flex-col items-center justify-center gap-4 rounded-lg border-2 border-stone-100 bg-stone-50 px-10 py-5 sm:my-[80px] sm:w-auto">
        <h1 className="font-clash text-4xl font-medium text-stone-600">New Job Post</h1>
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
          <div className="flex items-center justify-center gap-2">
            <Button variant={"default"} type="submit">
              Post
            </Button>
            <Button
              onClick={(e) => {
                e.preventDefault();
                reset();
              }}
              variant={"destructive"}
            >
              Reset
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Home;
