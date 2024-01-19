"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { AlignJustify, X } from "lucide-react";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <>
      <div className="fixed w-full flex h-[70px] bg-gray-100 border-b border-gray-300">
        <div className="flex flex-1 items-center justify-center">
          <h1 className="text-2xl sm:text-4xl font-black">HIRR.IN</h1>
        </div>
        <div className="flex flex-1 items-center justify-center gap-1">
          <div className="hidden sm:flex flex-1 items-center justify-center gap-1">
            <Button variant={"outline"}>Login</Button>
            <Button variant={"outline"}>Register</Button>
            <Button variant={"outline"}>Employer Login</Button>
          </div>
          <div className="flex w-full flex-1 items-center justify-end pr-10 gap-1 sm:hidden">
            <Button variant={"ghost"}>
              <AlignJustify onClick={toggleDrawer} />
            </Button>
          </div>
        </div>
        <div
          className={`fixed transition-all duration-300 top-0  ${
            isDrawerOpen ? "right-0" : "right-[-60vw]"
          } bottom-0 w-[60vw] bg-gray-100 border-l border-gray-300`}
        >
          <div className="flex w-full h-[70px] items-center justify-end gap-1 pr-10 bg-gray-100 border-none border-gray-300">
            <Button variant={"ghost"}>
              <X onClick={toggleDrawer} />
            </Button>
          </div>
          <div className="flex flex-col items-stretch justify-start w-full h-full p-10 gap-4 ">
            <Button variant={"outline"}>Login</Button>
            <Button variant={"outline"}>Register</Button>
            <Button variant={"outline"}>Employer Login</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
