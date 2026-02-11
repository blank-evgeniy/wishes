"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/utils/cn";

export const ModeSwitcher = () => {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      <Sun
        className={cn(
          "h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all",
          theme === "dark" ? "scale-0 -rotate-90" : "",
        )}
      />
      <Moon
        className={cn(
          "absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all",
          theme === "dark" ? "scale-100 rotate-0" : "",
        )}
      />
      <span className="sr-only">Переключить тему</span>
    </Button>
  );
};
