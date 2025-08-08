"use client";
import { motion } from "framer-motion";
import GlowCard from "@/components/GlowCard";

export default function FeatureCard({ title, body, chips }: { title: string; body: string; chips: string[] }) {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.2 }}>
      <GlowCard className="p-6 h-full">
        <div className="text-lg font-semibold">{title}</div>
        <p className="mt-2 text-sm text-black/70 dark:text-white/70">{body}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {chips.map((c) => (
            <span key={c} className="px-2 py-1 text-[11px] rounded-full border bg.white/60 dark:bg.white/[0.04]">
              {c}
            </span>
          ))}
        </div>
      </GlowCard>
    </motion.div>
  );
}
