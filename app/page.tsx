import GradientBG from '@/components/GradientBG'
import InboxDemo from '@/components/InboxDemo'
import CTA from '@/components/CTA'
import LogoGrid from '@/components/LogoGrid'
import Pricing from '@/components/Pricing'
import TestimonialMarquee from '@/components/TestimonialMarquee'
import Section from '@/components/Section'
import FeatureCard from '@/components/FeatureCard'
import GlowCard from '@/components/GlowCard'
import { siteCopy } from '@/lib/copy'

export default function Home() {
  return (
    <main className="relative">
      <section className="relative overflow-hidden">
        <GradientBG />
        <div className="max-w-6xl mx-auto px-4 py-20 sm:py-28">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 dark:bg.white/[0.06] border border-black/5 text-xs font-medium">
              {siteCopy.hero.eyebrow}
            </div>
            <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight text-[#0A0A1B] dark:text-white">
              {siteCopy.hero.title}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-black/70 dark:text-white/80 max-w-2xl mx-auto">
              {siteCopy.hero.subtitle}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a href="#demo" className="px-5 py-3 rounded-xl bg-[#6C5CE7] text-white shadow-glow focus:outline-none focus-visible:ring-4 focus-visible:ring-[#6C5CE7]/40">
                {siteCopy.hero.primaryCta}
              </a>
              <button className="px-5 py-3 rounded-xl border border-black/10 bg-white/70 dark:bg-white/[0.06]">
                {siteCopy.hero.secondaryCta}
              </button>
              <button disabled className="px-5 py-3 rounded-xl border border-dashed opacity-80">
                Connect Gmail/Outlook (Coming Soon)
              </button>
            </div>
            <div className="mt-4 flex items-center justify-center gap-4 text-xs text-black/70 dark:text-white/70">
              {siteCopy.hero.trust.map((t) => (
                <span key={t} className="inline-flex items-center gap-1">{t}</span>
              ))}
            </div>
          </div>
          <div id="demo" className="mt-12">
            <span className="block text-center text-xs font-semibold text-amber-900 bg-amber-300/80 px-2 py-1 rounded w-fit mx-auto">Demo only  no live email access</span>
            <div className="mt-3">
              <InboxDemo />
            </div>
          </div>
        </div>
      </section>

      <Section>
        <LogoGrid />
      </Section>

      <Section id="features" title="Features">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {siteCopy.features.map((f) => (
            <FeatureCard key={f.title} title={f.title} body={f.body} chips={f.chips} />
          ))}
        </div>
      </Section>

      <Section title="How it works">
        <div className="grid md:grid-cols-3 gap-4">
          {siteCopy.howItWorks.map((s) => (
            <GlowCard key={s.step} className="p-6">
              <div className="text-sm font-semibold text-[#6C5CE7]">{s.step}</div>
              <div className="mt-1 text-lg font-semibold">{s.title}</div>
              <p className="mt-2 text-sm text-black/70 dark:text-white/70">{s.body}</p>
            </GlowCard>
          ))}
        </div>
      </Section>

      <Section title={siteCopy.compliance.title}>
        <div className="grid sm:grid-cols-2 gap-4">
          {siteCopy.compliance.bullets.map((b) => (
            <GlowCard key={b} className="p-5 text-sm">{b}</GlowCard>
          ))}
        </div>
      </Section>

      <Section title="Testimonials">
        <TestimonialMarquee testimonials={siteCopy.testimonials} />
      </Section>

      <Section id="pricing" title="Pricing">
        <Pricing plans={siteCopy.pricing} />
      </Section>

      <Section title="FAQ">
        <div className="mx-auto max-w-3xl divide-y divide-black/10 dark:divide-white/10">
          {siteCopy.faq.map(({ q, a }) => (
            <details key={q} className="group">
              <summary className="cursor-pointer py-3 outline-none focus-visible:ring-4 focus-visible:ring-[#6C5CE7]/30 rounded">
                <span className="font-medium">{q}</span>
              </summary>
              <div className="pb-3 text-sm text-black/70 dark:text-white/70">{a}</div>
            </details>
          ))}
        </div>
      </Section>

      <CTA title={siteCopy.footer.ctaTitle} subtitle={siteCopy.footer.ctaSubtitle} buttonText={siteCopy.footer.ctaButton} />
    </main>
  )
}
