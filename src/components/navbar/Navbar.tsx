import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { UserButton, auth, currentUser } from "@clerk/nextjs";

const Navbar = async () => {
  const user = await currentUser()
  // console.log(user)
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
            {user && <p className="px-2">{user.firstName} {user.lastName}</p> }
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
