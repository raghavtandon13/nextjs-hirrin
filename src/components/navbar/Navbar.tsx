"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { AlignJustify, X } from "lucide-react";
import ThemeSwitch from "@/components/ThemeSwitch";
import Link from "next/link";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <>
      <div className="fixed w-full flex h-[70px] bg-gray-100 border-b border-gray-300 dark:bg-background dark:border-gray-700">
        <div className="flex flex-1 items-center justify-center">
          <Link href="/">
            <h1 className="text-2xl sm:text-4xl font-black dark:text-white">HIRR.IN</h1>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center gap-1">
          <div className="hidden sm:flex flex-1 items-center justify-center gap-1">
            <ThemeSwitch />

            <Link href="/signin">
              <Button variant={"outline"}>
                Login
              </Button>
            </Link>
            <Button variant={"outline"}>Register</Button>
            <Button variant={"outline"}>Employer Login</Button>
          </div>
          <div className="flex w-full flex-1 items-center justify-end pr-10 gap-1 sm:hidden">
            <Button variant={"ghost"}>
              <AlignJustify className="dark:text-white" onClick={toggleDrawer} />
            </Button>
          </div>
        </div>
        <div
          className={`fixed transition-all duration-300 top-0  ${
            isDrawerOpen ? "right-0" : "right-[-60vw]"
          } bottom-0 w-[60vw] bg-gray-100 border-l border-gray-300 dark:bg-zinc-900 dark:border-gray-700`}
        >
          <div className="flex w-full h-[70px] items-center justify-end gap-1 pr-10  border-none border-gray-300">
            <Button variant={"ghost"}>
              <X className="text-black dark:text-white" onClick={toggleDrawer} />
            </Button>
          </div>
          <div className="flex flex-col items-stretch justify-start w-full h-full p-10 gap-4 ">
            <Link onClick={toggleDrawer} href="/signin">
              <Button size={"full"} variant={"outline"}>Login</Button>
            </Link>
            <Button variant={"outline"}>Register</Button>
            <Button variant={"outline"}>Employer Login</Button>

            <ThemeSwitch />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
