import { Button, buttonVariants } from "@/components/ui/button";
import { db } from "@/lib/db";
import { ScrollText } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import SearchForm from "@/components/searchForm";
import SortPosts from "@/components/SortPosts";
import { decodeLocations } from "@/lib/locationDecoder";

const Posts = async ({ params, searchParams }: { params: { page: string; search: string }; searchParams: { location: string } }) => {
  let search = "";
  if (params.search) {
    search = params.search.toString();
  }
  const currentPage = Number(params.page);
  if (currentPage === 0) {
    redirect("/posts/1");
  }
  const pageSize = 3;
  const totalCount = await db.post.count({
    where: {
      OR: [
        {
          title: {
            contains: search,
            mode: "insensitive",
          },
        },
        {
          subtitle: {
            contains: search,
            mode: "insensitive",
          },
        },
        {
          body: {
            contains: search,
            mode: "insensitive",
          },
        },
        // {
        //   location: {
        //     some: {
        //       contains: location,
        //       mode: "insensitive",
        //     },
        //   },
        // },
      ],
    },
  });
  const maxPage = Math.ceil(totalCount / pageSize);
  if (currentPage > maxPage) {
    redirect("/posts/1");
  }
  const skip = (currentPage - 1) * pageSize;
  let allPosts: any[] = [];
  const location = decodeLocations({ encodedString: searchParams.location });

  allPosts = await db.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: search,
            mode: "insensitive",
          },
        },
        {
          subtitle: {
            contains: search,
            mode: "insensitive",
          },
        },
        {
          body: {
            contains: search,
            mode: "insensitive",
          },
        },
      ],
    },
    take: pageSize,
    skip: skip,
  });

  return (
    <>
      <div className="flex flex-row items-start ">
        <div className="flex flex-[1] flex-col items-center justify-center pt-20">
          <SortPosts search={search} />
        </div>
        <div className="mb-2  flex min-h-screen flex-[3] flex-col items-center justify-start pt-20">
          <SearchForm search={search} />
          {allPosts.length === 0 ? (
            <div>`No posts found for the search term ${search}`</div>
          ) : allPosts ? (
            allPosts.map((post: any) => (
              <>
                <div key={post.id} className="my-4 flex h-fit w-full  rounded-lg border-4 border-stone-100 bg-stone-50 p-10 sm:w-[80%]">
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
                    <div key={post.id} className="mt-2 flex flex-row items-start gap-2">
                      <Button>Apply</Button>
                      <Link href={"/post/" + post.id}>
                        <Button variant={"doutline"}>Read More</Button>
                      </Link>
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
              <Link className={buttonVariants({ variant: "outline", size: "lsm" })} href={`/posts/${currentPage - 1}/${search}?location=${location}`}>
                Previous
              </Link>
            )}
            <Button className="h-9" variant="outline" size="icon">
              {currentPage}
            </Button>
            {totalCount > skip + pageSize ? (
              <Link className={buttonVariants({ variant: "outline", size: "lsm" })} href={`/posts/${currentPage + 1}/${search}?location=${location}`}>
                Next
              </Link>
            ) : (
              <Button size="lsm" className="text-slate-300" variant="doutline">
                Next
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
