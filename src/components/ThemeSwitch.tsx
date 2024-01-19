"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

export default function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme();

  if (resolvedTheme === "dark") {
    return (
      <Button onClick={() => setTheme("light")} variant={"outline"}>
        <Sun  />
      </Button>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <Button onClick={() => setTheme("dark")} variant={"outline"}>
        <Moon   />
      </Button>
    );
  }
}
