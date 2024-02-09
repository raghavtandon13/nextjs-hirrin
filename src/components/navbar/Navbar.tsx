"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
        <div className="flex flex-1 items-center justify-end gap-1">
          <div className=" flex flex-1 items-center justify-center gap-1 sm:flex">
            <Link href="/signin">{isLoggedIn ? <Button variant={"outline"}>Logout</Button> : <Button variant={"outline"}>Login</Button>}</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
