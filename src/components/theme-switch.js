"use client";

import { useTheme } from "next-themes";
import { MoonIcon as MoonOutline } from "@heroicons/react/24/outline";
import { MoonIcon as MoonSolid } from "@heroicons/react/24/solid";

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className="flex gap-2 font-semibold"
      title="Toggles light and dark theme"
      aria-label="auto"
      aria-live="polite"
    >
      <MoonOutline className="block h-6 w-4 align-middle dark:hidden" />
      <MoonSolid className="hidden h-6 w-4 align-middle dark:block" />
      <span aria-hidden="true">Dark Mode</span>
    </button>
  );
};
