import GlowCard from "@/components/GlowCard";

export default function CTA({ title, subtitle, buttonText }: { title: string; subtitle: string; buttonText: string }) {
  return (
    <section id="cta" className="py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4">
        <GlowCard className="p-8 text-center">
          <h3 className="text-2xl font-extrabold">{title}</h3>
          <p className="mt-2 text-sm text-black/70 dark:text-white/70">{subtitle}</p>
          <div className="mt-5">
            <a href="#" className="inline-flex px-5 py-3 rounded-xl bg-[#6C5CE7] text-white shadow-glow focus-visible:ring-4 focus-visible:ring-[#6C5CE7]/40">{buttonText}</a>
          </div>
        </GlowCard>
      </div>
    </section>
  )
}
