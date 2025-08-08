"use client";
import { ThemeProvider } from "next-themes";
import { DefaultSeo } from "next-seo";
import SEO from "@/lib/seo";
import { Analytics } from "@vercel/analytics/react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <DefaultSeo {...SEO} />
      {children}
      <Analytics />
    </ThemeProvider>
  );
}
