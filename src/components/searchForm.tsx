"use client";
import { useRouter } from "next/navigation";

export default function SearchForm({ search }: { search: string }) {
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push(`/posts/1/${e.target[0].value}`);
  };

  return (
    <form className="flex  w-full  rounded-lg border-4 border-stone-100 bg-stone-50 sm:w-[80%]" onSubmit={handleSubmit}>
      <input className="flex-[5] py-2 focus:outline-none text-2xl" defaultValue={search}  placeholder="Search keywords..." type="text"></input>
      <button className="flex-[1] text-2xl" type="submit">Submit</button>
    </form>
  );
}
