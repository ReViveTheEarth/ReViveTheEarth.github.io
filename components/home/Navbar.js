import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/About", label: "About" },
  { href: "/Impact", label: "Impact" },
  { href: "/Community", label: "Community" },
  { href: "/Locations", label: "Locations" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-blue-500/10" />
          <div className="relative flex items-center justify-between gap-4 px-5 py-4">
            <Link href="/" className="flex items-center gap-3">
              <Logo />
              <span className="text-white font-semibold tracking-tight">
                ReVive
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-white/80 hover:text-white transition-colors text-sm font-medium"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <button
              className="md:hidden inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-white/80 hover:text-white"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <span className="text-sm font-medium">{open ? "Close" : "Menu"}</span>
            </button>
          </div>

          {open && (
            <div className="relative md:hidden border-t border-white/10 px-5 py-4">
              <div className="flex flex-col gap-3">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="text-white/80 hover:text-white transition-colors text-sm font-medium"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
