import { Button, buttonVariants } from "@/components/ui/button";
import { db } from "@/lib/db";
import { ScrollText } from "lucide-react";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { redirect } from "next/navigation";

const Posts = async ({ params }: { params: { page: string } }) => {
  const currentPage = Number(params.page);
  if (currentPage === 0) {
    redirect("/posts/1");
  }
  const pageSize = 3;
  const totalCount = await db.post.count();
  const maxPage = Math.ceil(totalCount / pageSize);
  if (currentPage > maxPage) {
    redirect("/posts/1");
  }
  const skip = (currentPage - 1) * pageSize;
  const allPosts = await db.post.findMany({
    take: pageSize,
    skip: skip,
  });
  return (
    <>
      <div className="mb-2 flex min-h-screen flex-col items-center justify-center">
        <h1 className="mt-20 text-3xl font-medium">Posts</h1>
        {allPosts ? (
          allPosts.map((post: any) => (
            <>
              <div key={post.id} className="my-4 flex h-fit w-full  rounded-lg border-4 border-stone-100 bg-stone-50 p-10 sm:w-[60%]">
                <div className="flex-[2]">
                  <Link href={"/post/" + post.id} className="px-0 underline-offset-4 hover:underline">
                    <h1 key={post.id} className="text-3xl font-medium">
                      {post.title}
                    </h1>
                  </Link>
                  <h1 key={post.id} className="text-xl font-medium text-gray-700">
                    {post.subtitle}
                  </h1>
                  <p key={post.id} className="text-md mt-4 h-[50px] max-w-full overflow-hidden text-ellipsis font-medium text-slate-500">
                    {post.body}
                  </p>
                  <div key={post.id} className="flex flex-col items-start">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button className="mb-[-10px] mt-4 px-0" variant="link">
                            By {post.author}
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{post.authorEmail}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
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
            </>
          ))
        ) : (
          <div>loading</div>
        )}
        <div
          className="m-10  
          flex justify-between gap-4"
        >
          {currentPage === 1 ? (
            <Button size="lsm" className="text-slate-300" variant="doutline">
              Previous
            </Button>
          ) : (
            <Link className={buttonVariants({ variant: "outline", size: "lsm" })} href={`/posts/${currentPage - 1}`}>
              Previous
            </Link>
          )}
          <Button className="h-9" variant="outline" size="icon">
            {currentPage}
          </Button>
          {totalCount > skip + pageSize ? (
            <Link className={buttonVariants({ variant: "outline", size: "lsm" })} href={`/posts/${currentPage + 1}`}>
              Next
            </Link>
          ) : (
            <Button size="lsm" className="text-slate-300" variant="doutline">
              Next
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Posts;
