import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  return (
    <div className="border-gray-800 pt-[70px] h-screen flex flex-col items-center justify-center">
      <div>
        <form className="flex flex-col bg-gray-100 items-center justify-center gap-4 border border-gray-300 rounded-md p-10">
          <input className="border border-gray-300 rounded-md p-2" type="text" placeholder="Email" />
          <input className="border border-gray-300 rounded-md p-2" type="text" placeholder="Password" />
          <Button variant={"outline"} type="submit">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default page;
