"use client";
import { motion } from "framer-motion";
import { blobs } from "@/lib/gradients";

export default function GradientBG({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}>
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className={`blur-3xl opacity-30 rounded-full ${b.className}`}
          style={{ position: "absolute", ...b.style }}
          animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 12 + i * 2, repeat: Infinity }}
        />
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),transparent_60%)]" />
    </div>
  );
}
