"use client";

import { ThemeProvider } from "next-themes";

export function AppThemeProvider({ children }) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
