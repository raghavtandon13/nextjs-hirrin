import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="border-gray-800 pt-[70px] h-screen flex items-center justify-center">
      <div className="flex flex-col items-stretch justify-center gap-4 sm:flex-row">
        <div className="flex flex-col items-start w-max h-full p-10 justify-center">
          <h1 className="text-[32px]">Your Future Awaits</h1>
          <h1 className="text-[32px]">Lets Dive In! </h1>
        </div>
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
    </div>
  );
};

export default page;
