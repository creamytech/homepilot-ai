﻿"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = (resolvedTheme ?? theme) === "dark";
  return (
    <button
      aria-label="Toggle dark mode"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg.white/70 dark:bg.white/[0.06] hover:ring-2 hover:ring-[#6C5CE7]/40 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#6C5CE7]/40"
    >
      <span className="text-xs font-semibold">
        {mounted ? (isDark ? "" : "") : ""}
      </span>
    </button>
  );
}
