import type { DefaultSeoProps } from 'next-seo'

const SEO: DefaultSeoProps = {
  titleTemplate: '%s | HomePilot AI',
  defaultTitle: 'HomePilot AI  Your AI real-estate co-pilot',
  description:
    'Turn inbox chaos into closed deals. HomePilot drafts replies in your voice and keeps follow-ups on schedule.',
  openGraph: { type: 'website', locale: 'en_US', url: 'https://homepilot.ai', siteName: 'HomePilot AI' },
  twitter: { cardType: 'summary_large_image' },
}

export default SEO
