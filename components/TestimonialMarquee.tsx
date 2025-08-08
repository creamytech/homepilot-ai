"use client";
import { useMemo } from "react";

type Testimonial = { quote: string; name: string; role: string }

export default function TestimonialMarquee({ testimonials }: { testimonials: Testimonial[] }) {
  const items = useMemo(() => [...testimonials, ...testimonials], [testimonials]);
  return (
    <div className="relative overflow-hidden rounded-2xl border border-black/5 bg.white/70 dark:bg.white/[0.06] shadow-lg backdrop-blur">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="flex gap-4 animate-marquee will-change-transform" style={{ animationDuration: '36s' }}>
        {items.map((t, idx) => (
          <figure key={idx} className="min-w-[280px] max-w-sm p-5">
            <blockquote className="text-sm">{t.quote}</blockquote>
            <figcaption className="mt-2 text-xs opacity-70"> {t.name}, {t.role}</figcaption>
          </figure>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation-name: marquee; animation-timing-function: linear; animation-iteration-count: infinite; }
      `}</style>
    </div>
  );
}
