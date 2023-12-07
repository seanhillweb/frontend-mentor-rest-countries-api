"use client";

import { useTheme } from "next-themes";

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className="inline-block"
      title="Toggles light and dark theme"
      aria-label="auto"
      aria-live="polite"
    >
      Dark Mode
    </button>
  );
};
