"use client";
import { useMemo, useState } from "react";
import { PaperPlaneIcon, LockClosedIcon } from "@radix-ui/react-icons";

type Tone = "Professional" | "Friendly" | "High-energy";

const leads = [
  { id: "l1", from: "maria@buyer.com", subject: "Tour this weekend?", body: "Hi! Is 124 Oak St still available? Could we tour Saturday?" },
  { id: "l2", from: "kevin@seller.com", subject: "Thinking of listing", body: "What would 88 Grove list for? Timeline is flexible." },
  { id: "l3", from: "lender@vendor.com", subject: "Pre-approval update", body: "Buyer is cleared up to 750k, docs attached." },
  { id: "l4", from: "tina@buyer.com", subject: "School district Qs", body: "Curious about schools near 19 Seaview." },
  { id: "l5", from: "olivia@buyer.com", subject: "Open house info", body: "What time is the open house for 52 Birch?" },
  { id: "l6", from: "alex@seller.com", subject: "Staging advice", body: "Worth staging the living room?" }
];

function draftReply(lead: typeof leads[number], tone: Tone) {
  const signoff = tone === "Professional" ? "Best regards" : tone === "Friendly" ? "Thanks so much" : "Lets make moves";
  const vibe = tone === "Professional" ? "Happy to help with next steps." : tone === "Friendly" ? "Excited to help you out!" : "Super pumped to get this rolling!";
  if (lead.subject.toLowerCase().includes("tour"))
    return `${lead.from.split("@")[0]},\n\nGreat news124 Oak St is available. I can do Sat 10:30am or 1:45pm. ${vibe}\n\nIll send you a quick checklist and confirm time.\n\n${signoff},\nHomePilot (in your agents voice)`;
  if (lead.subject.toLowerCase().includes("listing"))
    return `${lead.from.split("@")[0]},\n\nIll run comps for 88 Grove and share pricing + strategy today. ${vibe}\n\nWould you prefer an in-person walkthrough or a quick video call?\n\n${signoff},\nHomePilot`;
  if (lead.subject.toLowerCase().includes("pre-approval"))
    return `${lead.from.split("@")[0]},\n\nThanks for the update. With approval up to 750k, Ill prioritize options that hit your must-haves. ${vibe}\n\nIll send 3 listings shortly.\n\n${signoff},\nHomePilot`;
  if (lead.subject.toLowerCase().includes("school"))
    return `${lead.from.split("@")[0]},\n\nIll share school ratings, commute times, and nearby parks for 19 Seaview. ${vibe}\n\nAre weekdays after 5pm best for you?\n\n${signoff},\nHomePilot`;
  if (lead.subject.toLowerCase().includes("open house"))
    return `${lead.from.split("@")[0]},\n\nOpen house for 52 Birch is Sunday 122pm. Ill be there early if youd like a private walkthrough. ${vibe}\n\nWant me to text a reminder?\n\n${signoff},\nHomePilot`;
  if (lead.subject.toLowerCase().includes("staging"))
    return `${lead.from.split("@")[0]},\n\nStaging the living room typically boosts photos and first impressions. ${vibe}\n\nI can send 2 quick vendor recs and a cost estimate.\n\n${signoff},\nHomePilot`;
  return `${lead.from.split("@")[0]},\n\nGot itI'll follow up with details shortly. ${vibe}\n\n${signoff},\nHomePilot`;
}

export default function InboxDemo() {
  const [selected, setSelected] = useState(leads[0]);
  const [tone, setTone] = useState<Tone>("Friendly");
  const reply = useMemo(() => draftReply(selected, tone), [selected, tone]);
  return (
    <div className="relative rounded-2xl border border-black/5 bg.white/70 dark:bg.white/[0.06] shadow-lg backdrop-blur p-4 sm:p-6">
      <span className="absolute -left-2 top-3 rotate-[-6deg] bg-amber-400 text-amber-950 px-2 py-0.5 rounded text-xs font-semibold shadow-sm">DEMO ONLY  no live email access</span>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-xl bg.white/70 dark:bg.white/[0.04] border border-black/5 overflow-hidden">
          <div className="px-4 py-3 border-b border-black/5 flex items-center justify-between">
            <h3 className="text-sm font-semibold">Leads (Gmail / Outlook demo)</h3>
            <div className="text-[10px] opacity-70">Read-only sample</div>
          </div>
          <ul>
            {leads.map((l) => (
              <li key={l.id} onClick={() => setSelected(l)} className={`px-4 py-3 cursor-pointer border-b border-black/5 hover:bg.black/[0.04] dark:hover:bg.white/[0.06] ${selected.id === l.id ? "bg.black/[0.04] dark:bg.white/[0.08]" : ""}`}>
                <div className="text-xs opacity-70">{l.from}</div>
                <div className="text-sm font-medium">{l.subject}</div>
                <div className="text-xs line-clamp-1 opacity-80">{l.body}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {["Professional", "Friendly", "High-energy"].map((t) => (
              <button key={t} onClick={() => setTone(t as Tone)} className={`px-3 py-1.5 rounded-full text-xs border ${tone === (t as Tone) ? "bg-[#6C5CE7] text-white border-transparent" : "bg.white/70 dark:bg.white/[0.06]"}`}>{t}</button>
            ))}
            <span className="ml-auto text-[11px] inline-flex items-center gap-1 opacity-70"><LockClosedIcon /> Requires approval to send</span>
          </div>
          <div className="rounded-xl bg.white/70 dark:bg.white/[0.04] border border-black/5 p-3">
            <div className="text-xs opacity-70 mb-1">Suggested reply</div>
            <textarea className="w-full h-48 resize-none bg-transparent outline-none text-sm" value={reply} onChange={() => {}} readOnly />
            <div className="flex flex-wrap gap-2 mt-2">
              {["Propose two time slots", "Attach pre-approval checklist", "Add calendar link"].map((chip) => (
                <span key={chip} className="px-2 py-1 text-[11px] rounded-full border bg.white/60 dark:bg.white/[0.04]">{chip}</span>
              ))}
            </div>
            <div className="flex items-center gap-2 mt-3">
              <button className="px-3 py-2 text-sm rounded-lg bg.black text-white dark:bg.white dark:text-black">Copy to Drafts</button>
              <button disabled className="px-3 py-2 text-sm rounded-lg border border-dashed opacity-70 inline-flex items-center gap-2" title="Approval required"><PaperPlaneIcon /> Send (disabled)</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
