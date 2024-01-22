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
      <div className="fixed flex h-[70px] w-full border-b border-gray-300 bg-gray-100 dark:border-gray-700 dark:bg-background">
        <div className="flex flex-1 items-center justify-center">
          <Link href="/">
            <h1 className="font-clash text-2xl font-black dark:text-white sm:text-4xl">HIRR.IN</h1>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center gap-1">
          <div className="hidden flex-1 items-center justify-center gap-1 sm:flex">
            <ThemeSwitch />

            <Link href="/signin">
              <Button variant={"outline"}>Login</Button>
            </Link>
            <Button variant={"outline"}>Register</Button>
            <Button variant={"outline"}>Employer Login</Button>
          </div>
          <div className="flex w-full flex-1 items-center justify-end gap-1 pr-10 sm:hidden">
            <Button variant={"ghost"}>
              <AlignJustify className="dark:text-white" onClick={toggleDrawer} />
            </Button>
          </div>
        </div>
        <div
          className={`fixed top-0 transition-all duration-300  ${isDrawerOpen ? "right-0" : "right-[-60vw]"} bottom-0 w-[60vw] border-l border-gray-300 bg-gray-100 dark:border-gray-700 dark:bg-zinc-900`}
        >
          <div className="flex h-[70px] w-full items-center justify-end gap-1 border-none  border-gray-300 pr-10">
            <Button variant={"ghost"}>
              <X className="text-black dark:text-white" onClick={toggleDrawer} />
            </Button>
          </div>
          <div className="flex h-full w-full flex-col items-stretch justify-start gap-4 p-10 ">
            <Link onClick={toggleDrawer} href="/signin">
              <Button size={"full"} variant={"outline"}>
                Login
              </Button>
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
