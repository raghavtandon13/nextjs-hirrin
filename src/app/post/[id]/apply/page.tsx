import CloseModal from "@/components/CloseModal";
import { Button, buttonVariants } from "@/components/ui/button";
import { db } from "@/lib/db";
import { Archive, ScrollText } from "lucide-react";
import Link from "next/link";

const Post = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  let post;
  try {
    post = await db.post.findUnique({ where: { id: id } });
  } catch (error) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <p className="text-5xl font-medium">404</p>
        <p className="text-3xl font-medium">PAGE NOT FOUND</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-start justify-center">
      <div className="flex w-[70%] gap-10">
        <div className=" mt-40 flex-[1] ">
          <h1 className="text-6xl font-medium">{post.title}</h1>
          <div className=" py-4">
            <h1 className="text-slate-500">Location: Mumbai</h1>
            <h1 className="text-slate-500">Discipline: Banking</h1>
            <h1 className="text-slate-500">Job Type: Permanent</h1>
          </div>
        </div>
        <div className="mt-40 flex-[1]  rounded-md bg-gray-100 p-10 ">
          <form action="">
            <div className="flex flex-col gap-10">
              <input className="p-2" type="text" placeholder="First Name" />
              <input className="p-2" type="text" placeholder="Last Name" />
              <input className="p-2" type="text" placeholder="Email" />
              <small className="mb-[-30px]">Resume</small>
              <input type="file" placeholder="Resume" />
              <Button variant="apply">Apply Now</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Post;
