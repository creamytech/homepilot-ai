import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export default function GlowCard({ children, className = "" }: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-black/5 bg-white/70 dark:bg.white/[0.06] shadow-lg backdrop-blur transition duration-200",
        "hover:-translate-y-0.5 hover:ring-1 hover:ring-[#6C5CE7]/30 hover:shadow-glow",
        className
      )}
    >
      {children}
    </div>
  );
}
