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

const page = () => {
  return (
    <div className="absolute opacity-85 w-screen bg-black h-screen overflow-hidden">
      <div className="w-full h-full flex flex-col items-center justify-center">
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
