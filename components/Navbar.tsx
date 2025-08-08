"use client";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { PaperPlaneIcon } from "@radix-ui/react-icons";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/30 bg-white/70 dark:bg-white/[0.04] border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="group inline-flex items-center gap-2 font-extrabold tracking-tight">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#6C5CE7] text-white shadow-glow">
            <PaperPlaneIcon />
          </span>
          <span>HomePilot AI</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm opacity-80">
          <a href="#features" className="hover:text-[#6C5CE7] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#6C5CE7]/30 rounded">Features</a>
          <a href="#pricing" className="hover:text-[#6C5CE7] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#6C5CE7]/30 rounded">Pricing</a>
          <Link href="/security" className="hover:text-[#6C5CE7] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#6C5CE7]/30 rounded">Security</Link>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a href="#cta" className="hidden sm:inline-flex px-4 py-2 rounded-xl bg-[#6C5CE7] text-white text-sm shadow-glow focus-visible:ring-4 focus-visible:ring-[#6C5CE7]/40">Join Waitlist</a>
        </div>
      </div>
    </header>
  );
}
