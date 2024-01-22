"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (resolvedTheme === "dark") {
    return (
      <Button onClick={() => setTheme("light")} variant={"outline"}>
        <Sun />
      </Button>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <Button onClick={() => setTheme("dark")} variant={"outline"}>
        <Moon />
      </Button>
    );
  }
}
