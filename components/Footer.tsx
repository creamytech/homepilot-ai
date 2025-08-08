import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 py-10 text-sm">
      <div className="max-w-6xl mx-auto px-4 grid gap-6 sm:grid-cols-3">
        <div>
          <div className="font-extrabold">HomePilot AI</div>
          <p className="mt-2 opacity-70">AI assistant for real-estate agents.</p>
        </div>
        <nav className="grid gap-2">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <Link href="/security">Security</Link>
        </nav>
        <nav className="grid gap-2">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </nav>
      </div>
      <div className="mt-8 text-center text-xs opacity-70"> {new Date().getFullYear()} HomePilot AI</div>
    </footer>
  );
}
