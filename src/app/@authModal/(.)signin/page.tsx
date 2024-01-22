import React, { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Link from "next/link";
import CloseModal from "@/components/CloseModal";

const page = () => {
  return (
    <div className="absolute h-screen w-screen overflow-hidden bg-[#000000de]">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="rounded-md border-gray-300 bg-gray-100">
          <div className="flex w-full items-center justify-end p-2">
            <CloseModal />
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-4 px-10 py-4">
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
