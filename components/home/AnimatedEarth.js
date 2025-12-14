import React from "react";

/**
 * Lightweight background that matches the Base44 “floating earth” vibe.
 *
 * Important: This component is SSR-safe (no window/document usage), so Next.js
 * can pre-render pages during Vercel builds.
 */
export default function AnimatedEarth() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <style>{`
        @keyframes revive-float {
          0% { transform: translate3d(0,0,0); }
          50% { transform: translate3d(0,-18px,0); }
          100% { transform: translate3d(0,0,0); }
        }
        @keyframes revive-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      {/* soft blobs */}
      <div className="absolute -top-40 -right-40 w-[38rem] h-[38rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle at 30% 30%, rgba(16,185,129,0.25) 0%, rgba(6,182,212,0.10) 45%, rgba(2,6,12,0) 70%)" }}
      />
      <div className="absolute -bottom-48 -left-48 w-[44rem] h-[44rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle at 60% 60%, rgba(96,165,250,0.20) 0%, rgba(6,182,212,0.10) 40%, rgba(2,6,12,0) 72%)" }}
      />

      {/* Earth */}
      <div
        className="absolute left-1/2 top-[-4rem] -translate-x-1/2 w-[22rem] h-[22rem] md:w-[28rem] md:h-[28rem] rounded-full"
        style={{
          animation: "revive-float 8s ease-in-out infinite",
          background:
            "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.18) 0%, rgba(96,165,250,0.18) 22%, rgba(6,182,212,0.20) 45%, rgba(16,185,129,0.10) 70%, rgba(2,6,12,0) 78%)",
          filter: "drop-shadow(0 35px 80px rgba(0,0,0,0.55))",
        }}
      >
        {/* subtle texture ring */}
        <div
          className="absolute inset-0 rounded-full opacity-40"
          style={{
            background:
              "conic-gradient(from 180deg, rgba(16,185,129,0.22), rgba(6,182,212,0.18), rgba(96,165,250,0.18), rgba(16,185,129,0.22))",
            animation: "revive-rotate 40s linear infinite",
            maskImage:
              "radial-gradient(circle, rgba(0,0,0,0) 0 52%, rgba(0,0,0,1) 58% 100%)",
            WebkitMaskImage:
              "radial-gradient(circle, rgba(0,0,0,0) 0 52%, rgba(0,0,0,1) 58% 100%)",
          }}
        />
      </div>
    </div>
  );
}
