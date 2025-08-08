import './globals.css'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Providers from '@/components/Providers'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300','400','500','600','700','800'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'HomePilot AI  Your AI real-estate co-pilot',
  description: 'Turn inbox chaos into closed deals. Draft replies in your voice and keep follow-ups on schedule.',
  metadataBase: new URL('https://homepilot.ai')
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakarta.variable} antialiased bg-background text-foreground`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
