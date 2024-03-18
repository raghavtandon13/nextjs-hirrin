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
    <>
      <div className="flex ">
        <div className="flex min-h-screen flex-[3] flex-col items-center justify-start pt-20">
          {post ? (
            <>
              <div className="my-4 flex h-fit w-full flex-col items-start  rounded-lg border-4 border-stone-100 bg-stone-50 p-10 sm:w-[90%]">
                <div className="relative flex w-full">
                  <div className="absolute right-[-20px] top-[-20px]">
                    <CloseModal />
                  </div>
                  <div className="flex-[2] ">
                    <h1 className="text-6xl font-medium">{post.title}</h1>
                    <div className=" py-4">
                      <h1 className="text-slate-500">Location: Mumbai</h1>
                      <hr />
                      <h1 className="text-slate-500">Discipline: Banking</h1>
                      <hr />
                      <h1 className="text-slate-500">Job Type: Permanent</h1>
                      <hr />
                    </div>
                  </div>
                </div>
                <p className="text-md mt-4 max-w-full overflow-hidden text-ellipsis font-medium text-slate-500">{post.body}</p>
              </div>
            </>
          ) : (
            <div>loading</div>
          )}
        </div>
        <div className="flex min-h-screen flex-[1] flex-col items-center justify-start gap-2 pt-24">
          <Link className={buttonVariants({ variant: "apply" })} href={`/post/${id}/apply`}>
            Apply Now
          </Link>
          <Link className={buttonVariants({ variant: "apply2" })} href={"#"}>
            Share This Job
          </Link>
        </div>
      </div>
    </>
  );
};

export default Post;
