import CloseModal from "@/components/CloseModal";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { Archive, ScrollText } from "lucide-react";

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
      <div className="flex min-h-screen flex-col items-center justify-center pt-20">
        {post ? (
          <>
            <div className="my-4 flex h-fit w-full flex-col items-start  rounded-lg border-4 border-stone-100 bg-stone-50 p-10 sm:w-[60%]">
              <div className="relative flex w-full">
                <div className="absolute right-[-20px] top-[-20px]">
                  <CloseModal />
                </div>
                <div className="flex-[2] ">
                  <h1 className="text-3xl font-medium">{post.title}</h1>
                  <h1 className="text-xl font-medium text-gray-700">{post.subtitle}</h1>
                  <Button size={"icon"} variant={"ghost"}>
                    <Archive strokeWidth={0.8} />
                  </Button>
                  <div className="flex flex-col items-start">
                    <Button className="mb-[-10px] mt-4 px-0" variant="link">
                      By {post.author}
                    </Button>
                    <small className="font-medium text-gray-700">
                      {new Date(post.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </small>
                  </div>
                </div>
                <div className="flex h-auto flex-[1] items-center justify-end">
                  <ScrollText strokeWidth={0.6} className="h-[100px] w-[100px]" />
                </div>
              </div>
              <p className="text-md mt-4 max-w-full overflow-hidden text-ellipsis font-medium text-slate-500">{post.body}</p>
            </div>
          </>
        ) : (
          <div>loading</div>
        )}
      </div>
    </>
  );
};

export default Post;
