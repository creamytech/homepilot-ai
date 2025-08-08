export const siteCopy = {
  brand: "HomePilot AI",
  hero: {
    eyebrow: "Your AI real-estate co-pilot",
    title: "Turn inbox chaos into closed deals.",
    subtitle:
      "HomePilot reads new leads, drafts replies in your voice, and keeps follow-ups on scheduleso you can spend more time touring and less time typing.",
    primaryCta: "Try the Live Demo",
    secondaryCta: "Join the Waitlist",
    trust: ["No data sold", "Agent-controlled", "SOC 2 in progress"]
  },
  features: [
    {
      title: "Smart email + tone match",
      body: "Understands buyer/seller intent and drafts replies that sound like youshort, warm, and on-brand.",
      chips: ["Gmail (demo)", "Outlook (demo)", "Tone: Pro / Friendly / High-energy"]
    },
    {
      title: "Lead triage & nudges",
      body: "Flags hot leads, proposes next steps, and reminds you when its time to follow up.",
      chips: ["Priority scoring", "Calendar slots", "Auto-nudges"]
    },
    {
      title: "Listing-aware answers",
      body: "Pulls highlights you providephotos, comps, schoolsso replies stay specific and helpful.",
      chips: ["Templates", "Snippets", "Saved answers"]
    }
  ],
  howItWorks: [
    { step: "01", title: "Connect your inbox", body: "Gmail or Outlook OAuth. Read-only by default; drafts stay in your control." },
    { step: "02", title: "Teach your voice", body: "Paste a sample reply or choose a tone; HomePilot adapts instantly." },
    { step: "03", title: "Review & send", body: "Approve drafts in one click. Everything is logged and editable." }
  ],
  compliance: {
    title: "Privacy, consent, and controlby design",
    bullets: [
      "Your emails arent used to train public models by default.",
      "You approve before anything is sent.",
      "Clear logs and easy opt-out for clients.",
      "SOC 2 Type I in progress; encryption in transit & at rest."
    ]
  },
  testimonials: [
    { quote: "I got my evenings back. It nails the follow-ups.", name: "Sam P.", role: "Listing Agent, NYC" },
    { quote: "Feels like an assistant who actually knows my voice.", name: "Ava R.", role: "Buyers Agent, LA" }
  ],
  pricing: [
    { name: "Starter", price: "$0", tagline: "Kick the tires", features: ["Live demo", "1 tone profile", "Sample templates"] },
    { name: "Pro", price: "$39/mo", tagline: "Most popular", features: ["Gmail/Outlook (beta)", "Unlimited tones", "Lead scoring", "Follow-up nudges"] },
    { name: "Team", price: "$99/mo", tagline: "For brokerages", features: ["Shared templates", "Team analytics", "Priority support"] }
  ],
  faq: [
    { q: "Does it send without my approval?", a: "No. You review every draft before it goes out." },
    { q: "Will it change my voice?", a: "It adapts to the style you setprofessional, friendly, or high-energy." },
    { q: "How do you handle privacy?", a: "OAuth, least-privilege scopes, encryption at rest/in transit, and no default model training on your data." },
    { q: "Does this replace my CRM?", a: "No. HomePilot focuses on inbox speed; CRM integrations are coming." }
  ],
  footer: {
    ctaTitle: "Ready to get your time back?",
    ctaSubtitle: "Join the waitlist and be first to try the Gmail/Outlook beta.",
    ctaButton: "Join the Waitlist"
  }
};
