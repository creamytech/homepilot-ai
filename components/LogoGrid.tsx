export default function LogoGrid() {
  const logos = ["Everest Realty", "Harbor & Co.", "Pinecrest", "Cobalt Brokers", "Nexa Homes", "North&West"];
  return (
    <div className="rounded-2xl border border-black/5 bg.white/70 dark:bg.white/[0.06] shadow-lg backdrop-blur p-6">
      <div className="text-center text-sm opacity-70 mb-4">Agents from brokerages like</div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 items-center">
        {logos.map((l) => (
          <div key={l} className="text-center text-sm font-semibold opacity-80 bg-gradient-to-br from-[#6C5CE7]/10 to-[#00D1B2]/10 rounded-lg py-3">
            {l}
          </div>
        ))}
      </div>
    </div>
  );
}
