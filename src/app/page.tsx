import Image from "next/image";
import img from "@/assests/pleaseBePatient.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs";

export default async function Home() {
  const user = await currentUser()
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between pt-[70px]  md:flex-row lg:mx-[10%]`}>
      <div className="flex flex-1 flex-col items-center justify-center">
        <h1 className="px-5 text-center font-clash text-[40px] font-black text-gray-800 dark:text-slate-300 lg:text-[8vh]">Your Dream Job</h1>
        <h1 className="text-center font-clash text-[40px] font-black text-gray-800 dark:text-slate-300 lg:text-[8vh]">is Waiting</h1>
        <h1 className="text-center font-clash text-[40px] font-black text-gray-800 dark:text-slate-300 lg:text-[8vh]">For You</h1>
        <div className="flex gap-2">
          <Link href="/posts/1">
            <Button size={"lg"} variant={"outline"}>
              {!!user ? 'Post' : 'Login'}
            </Button>
          </Link>
        </div>
      </div>
      <div className="wow flex flex-1 items-center justify-center">
        <Image width={700} height={700} src={img} alt="" />
      </div>
    </main>
  );
}
