"use client";
import Image from "next/image";
import img from "@/assests/pleaseBePatient.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  // const [apiData, setApiData] = useState<any>(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.post("https://hirrin-backend.vercel.app/api/test2", { name: "okbye" });
  //       setApiData(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between pt-[70px] md:flex-row lg:mx-[10%]`}>
      <div className="flex flex-1 flex-col items-center justify-center">
        {/* {apiData ? <h1>{apiData.message.name}</h1> : <p>Loading...</p>} */}
        <h1 className="px-5 text-center font-clash text-[40px] font-black text-gray-800 dark:text-slate-300 lg:text-[8vh]">Your Dream Job</h1>
        <h1 className="text-center font-clash text-[40px] font-black text-gray-800 dark:text-slate-300 lg:text-[8vh]">is Waiting</h1>
        <h1 className="text-center font-clash text-[40px] font-black text-gray-800 dark:text-slate-300 lg:text-[8vh]">For You</h1>
        <div className="flex gap-2">
          <Link href="/signin">
            <Button size={"lg"} variant={"outline"}>
              Login In
            </Button>
          </Link>
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
