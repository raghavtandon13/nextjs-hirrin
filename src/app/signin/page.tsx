import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="border-gray-800 pt-[70px] h-screen flex flex-col items-center justify-center">
      <div className="bg-gray-100 border-gray-300 rounded-md ">
        <div className="w-full flex flex-col items-center justify-center gap-4 px-10 pt-10 pb-4">
          <Button size={"full"} variant={"outline"}>
            Login with <span className="font-bold ml-1">Google</span>
          </Button>
          or
        </div>
        <form className="flex flex-col  items-center justify-center gap-4 rounded-md p-10 pt-0">
          <input className="border border-gray-300 rounded-md p-2" type="text" placeholder="Email" />
          <input className="border border-gray-300 rounded-md p-2" type="text" placeholder="Password" />
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
  );
};

export default page;
