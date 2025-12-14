import React, { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Logo from "./Logo";
import LiquidGlassButton from "../ui/LiquidGlassButton";
import { Menu, X } from "../ui/icons";
import { createPageUrl } from "../../utils";

export default function Navbar() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const items = useMemo(
    () => ["About", "Impact", "Locations", "Community"],
    []
  );

  const isActive = (label) => {
    const href = createPageUrl(label);
    return (router?.pathname || "") === href;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-5">
      <div
        className="mx-auto max-w-7xl rounded-2xl border border-white/10 backdrop-blur-2xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(30, 58, 95, 0.55) 0%, rgba(10, 22, 40, 0.65) 100%)",
          boxShadow:
            "0 20px 50px -25px rgba(0,0,0,0.7), 0 0 40px rgba(16, 185, 129, 0.10)",
        }}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 py-3">
          <Link href={createPageUrl("Home")} className="flex items-center gap-3">
            <Logo />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {items.map((label) => (
              <Link
                key={label}
                href={createPageUrl(label)}
                className={
                  "px-4 py-2 rounded-xl text-sm font-medium transition-colors " +
                  (isActive(label)
                    ? "text-white bg-white/10"
                    : "text-white/70 hover:text-white hover:bg-white/5")
                }
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link href={createPageUrl("Onboarding")}>
                <LiquidGlassButton size="sm">Join ReVive</LiquidGlassButton>
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen ? (
          <div className="md:hidden px-4 sm:px-6 pb-4">
            <div className="pt-2 border-t border-white/10" />
            <nav className="flex flex-col gap-1 pt-3">
              {items.map((label) => (
                <Link
                  key={label}
                  href={createPageUrl(label)}
                  onClick={() => setMobileOpen(false)}
                  className={
                    "px-4 py-3 rounded-xl text-base font-medium transition-colors " +
                    (isActive(label)
                      ? "text-white bg-white/10"
                      : "text-white/70 hover:text-white hover:bg-white/5")
                  }
                >
                  {label}
                </Link>
              ))}
              <Link href={createPageUrl("Onboarding")} onClick={() => setMobileOpen(false)}>
                <LiquidGlassButton size="md" className="w-full mt-2">
                  Join ReVive
                </LiquidGlassButton>
              </Link>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
