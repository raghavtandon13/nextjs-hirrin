import Image from "next/image";
import img from "@/assests/pleaseBePatient.png";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between pt-[70px] md:flex-row lg:mx-[10%]`}>
      <div className="flex flex-1 flex-col items-center justify-center">
        <h1 className="font-clash font-black text-[40px] text-center text-gray-800 px-5 lg:text-[8vh]">
          Your <span className="mx-1">Dream</span> Job
        </h1>
        <h1 className="font-clash font-black text-[40px] text-center text-gray-800 lg:text-[8vh]">is Waiting</h1>
        <h1 className="font-clash font-black text-[40px] text-center text-gray-800 lg:text-[8vh]">For You</h1>
        <div className="flex gap-2">
          <Button size={"lg"} variant={"outline"}>
            Login In
          </Button>
          <Button size={"lg"} variant={"outline"}>
            Register
          </Button>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <Image width={700} height={700} src={img} alt="" />
      </div>
    </main>
  );
}
