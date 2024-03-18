"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

interface LocationMap {
  [key: string]: string;
}

export const locationMap: LocationMap = {
  Delhi: "D",
  Mumbai: "M",
  Kolkata: "K",
  Chennai: "C",
  Bangalore: "B",
  Hyderabad: "H",
  Pune: "P",
  Ahmedabad: "A",
  Jaipur: "J",
  Lucknow: "L",
};

export default function SortPosts({ search }: { search: string }) {
  const router = useRouter();
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedLocations([...selectedLocations, value]);
    } else {
      setSelectedLocations(selectedLocations.filter((location) => location !== value));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const encodedLocations = encodeLocations(selectedLocations);
    router.push(`/posts/1/${search}?location=${encodedLocations}`);
  };

  const encodeLocations = (locations: string[]) => {
    return locations.map((location) => locationMap[location]).join("");
  };

  return (
    <form className="ml-8 flex flex-col rounded-lg border-4 border-stone-100 bg-stone-50 p-8" onSubmit={handleSubmit}>
      <h1 className="text-3xl font-medium">Jobs By Location</h1>
      <h1 className="border-b border-black p-2 text-xl">
        <input value="Delhi" type="checkbox" onChange={handleCheckboxChange} /> Delhi
      </h1>
      <h1 className="border-b border-black p-2 text-xl">
        <input value="Mumbai" type="checkbox" onChange={handleCheckboxChange} /> Mumbai
      </h1>
      <h1 className="border-b border-black p-2 text-xl">
        <input value="Kolkata" type="checkbox" onChange={handleCheckboxChange} /> Kolkata
      </h1>
      <h1 className="border-b border-black p-2 text-xl">
        <input value="Chennai" type="checkbox" onChange={handleCheckboxChange} /> Chennai
      </h1>
      <h1 className="border-b border-black p-2 text-xl">
        <input value="Bangalore" type="checkbox" onChange={handleCheckboxChange} /> Bangalore
      </h1>
      <h1 className="border-b border-black p-2 text-xl">
        <input value="Hyderabad" type="checkbox" onChange={handleCheckboxChange} /> Hyderabad
      </h1>
      <h1 className="border-b border-black p-2 text-xl">
        <input value="Pune" type="checkbox" onChange={handleCheckboxChange} /> Pune
      </h1>
      <h1 className="border-b border-black p-2 text-xl">
        <input value="Ahmedabad" type="checkbox" onChange={handleCheckboxChange} />
        Ahmedabad
      </h1>
      <h1 className="border-b border-black p-2 text-xl">
        <input value="Jaipur" type="checkbox" onChange={handleCheckboxChange} /> Jaipur
      </h1>
      <h1 className="p-2 text-xl">
        <input value="Lucknow" type="checkbox" onChange={handleCheckboxChange} /> Lucknow
      </h1>
      <Button variant={"outline"} type="submit">
        Submit
      </Button>
    </form>
  );
}
