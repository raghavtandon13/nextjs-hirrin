import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex h-screen items-center justify-center border-gray-800 pt-[70px]">
      <div className="flex flex-col items-stretch justify-center gap-4 sm:flex-row">
        <div className="flex h-full w-max flex-col items-start justify-center p-10">
          <h1 className="text-[32px]">Your Future Awaits</h1>
          <h1 className="text-[32px]">Lets Dive In! </h1>
        </div>
        <div className="rounded-md border-gray-300 bg-gray-100 ">
          <div className="flex w-full flex-col items-center justify-center gap-4 px-10 pb-4 pt-10">
            <Button size={"full"} variant={"outline"}>
              Login with <span className="ml-1 font-bold">Google</span>
            </Button>
            or
          </div>
          <form className="flex flex-col  items-center justify-center gap-4 rounded-md p-10 pt-0">
            <input className="rounded-md border border-gray-300 p-2" type="text" placeholder="Email" />
            <input className="rounded-md border border-gray-300 p-2" type="text" placeholder="Password" />
            <Button variant={"outline"} type="submit">
              Login
            </Button>
            <p>
              New to Hirr.in?{" "}
              <Link className="hover:text-blue-500" href={"#"}>
                Register Here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
