import React from "react";

const sizeClasses = {
  sm: "h-10 px-4 text-sm rounded-xl",
  md: "h-12 px-6 text-base rounded-2xl",
  lg: "h-14 px-8 text-base md:text-lg rounded-2xl",
};

export default function LiquidGlassButton({
  children,
  size = "md",
  className = "",
  type = "button",
  ...props
}) {
  const s = sizeClasses[size] || sizeClasses.md;

  return (
    <button
      type={type}
      className={
        "relative inline-flex items-center justify-center gap-2 font-semibold text-white border border-white/10 backdrop-blur-2xl transition-transform active:scale-[0.98] hover:scale-[1.01] " +
        s +
        " " +
        className
      }
      style={{
        background:
          "linear-gradient(135deg, rgba(16,185,129,0.30) 0%, rgba(6,182,212,0.18) 55%, rgba(96,165,250,0.16) 100%)",
        boxShadow:
          "0 18px 45px -25px rgba(0,0,0,0.75), 0 0 50px rgba(16,185,129,0.12)",
      }}
      {...props}
    >
      {/* sheen */}
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-[inherit] opacity-70"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.02) 35%, rgba(255,255,255,0) 60%)",
        }}
      />
      <span className="relative">{children}</span>
    </button>
  );
}
