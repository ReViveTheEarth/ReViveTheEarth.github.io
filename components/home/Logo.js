import React from "react";

export default function Logo() {
  return (
    <div className="flex items-center gap-2 select-none">
      <div
        className="w-9 h-9 rounded-xl border border-white/10 backdrop-blur-xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(16,185,129,0.25) 0%, rgba(6,182,212,0.18) 45%, rgba(96,165,250,0.18) 100%)",
          boxShadow: "0 0 28px rgba(16,185,129,0.15)",
        }}
      />
      <div className="leading-none">
        <div className="text-white font-semibold tracking-tight">
          ReVive
          <span
            style={{
              background: "linear-gradient(135deg, #34D399 0%, #06B6D4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginLeft: 6,
            }}
          >
            Earth
          </span>
        </div>
        <div className="text-[11px] text-white/50">Track impact in kilograms</div>
      </div>
    </div>
  );
}
