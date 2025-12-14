import React from "react";
import Link from "next/link";
import { createPageUrl } from "../../utils";

export default function Footer() {
  const links = [
    { label: "About", href: createPageUrl("About") },
    { label: "Impact", href: createPageUrl("Impact") },
    { label: "Locations", href: createPageUrl("Locations") },
    { label: "Community", href: createPageUrl("Community") },
  ];

  return (
    <footer className="relative z-10 px-6 pb-12">
      <div className="mx-auto max-w-7xl">
        <div
          className="rounded-3xl border border-white/10 backdrop-blur-2xl p-10"
          style={{
            background:
              "linear-gradient(135deg, rgba(30, 58, 95, 0.45) 0%, rgba(10, 22, 40, 0.65) 100%)",
            boxShadow: "0 25px 60px -30px rgba(0,0,0,0.7)",
          }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <div className="text-white font-semibold text-lg">ReVive Earth</div>
              <div className="text-white/55 mt-1 max-w-md">
                A transparent recycling network that turns everyday actions into measurable impact.
              </div>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {links.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="text-white/60 hover:text-white transition"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="text-white/40 text-sm">© {new Date().getFullYear()} ReVive Earth</div>
            <div className="text-white/40 text-sm">Built for the planet 🌍</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
