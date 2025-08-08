import GlowCard from "@/components/GlowCard";

type Plan = { name: string; price: string; tagline: string; features: string[] }

export default function Pricing({ plans }: { plans: Plan[] }) {
  return (
    <div id="pricing" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {plans.map((p) => (
        <GlowCard key={p.name} className="p-6">
          <div className="flex items-baseline justify-between">
            <div className="text-xl font-bold">{p.name}</div>
            {p.name === 'Pro' ? <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#6C5CE7] text-white">Most popular</span> : null}
          </div>
          <div className="mt-2 text-3xl font-extrabold">{p.price}</div>
          <div className="text-sm opacity-70">{p.tagline}</div>
          <ul className="mt-4 space-y-2 text-sm">
            {p.features.map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00D1B2]" /> {f}
              </li>
            ))}
          </ul>
          <button className="mt-5 w-full px-4 py-2 rounded-xl bg-[#6C5CE7] text-white shadow-glow focus-visible:ring-4 focus-visible:ring-[#6C5CE7]/40">Choose {p.name}</button>
        </GlowCard>
      ))}
    </div>
  );
}
