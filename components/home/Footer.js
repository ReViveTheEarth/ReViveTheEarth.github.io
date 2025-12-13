import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24">
      <div className="mx-auto max-w-7xl px-6 pb-10">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
          <div className="px-6 py-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <div className="text-white font-semibold">ReVive the Earth</div>
                <div className="text-white/60 text-sm mt-1">
                  Track impact. Build community. Make recycling feel real.
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                <Link href="/About" className="text-white/70 hover:text-white">About</Link>
                <Link href="/Impact" className="text-white/70 hover:text-white">Impact</Link>
                <Link href="/Community" className="text-white/70 hover:text-white">Community</Link>
                <Link href="/Locations" className="text-white/70 hover:text-white">Locations</Link>
              </div>
            </div>

            <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

            <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-white/50">
              <div>© {new Date().getFullYear()} ReVive. All rights reserved.</div>
              <div className="flex items-center gap-4">
                <span className="text-white/50">Built for Vercel + Next.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
