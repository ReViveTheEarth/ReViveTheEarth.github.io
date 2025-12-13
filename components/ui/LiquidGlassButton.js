import React from "react";

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

export default function LiquidGlassButton({
  children,
  size = "md",
  className = "",
  disabled = false,
  type = "button",
  ...props
}) {
  const s = sizeClasses[size] || sizeClasses.md;

  return (
    <button
      type={type}
      disabled={disabled}
      className={[
        "relative inline-flex items-center justify-center gap-2 rounded-2xl",
        s,
        "font-semibold text-white",
        "transition-transform duration-150 active:scale-[0.99]",
        disabled ? "opacity-60 cursor-not-allowed" : "hover:scale-[1.01]",
        // glass + gradient
        "bg-white/5 backdrop-blur-xl border border-white/10",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_10px_30px_rgba(0,0,0,0.35)]",
        "hover:border-white/20",
        className,
      ].join(" ")}
      {...props}
    >
      {/* gradient sheen */}
      <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-400/20 via-cyan-400/10 to-blue-500/20 opacity-90" />
      {/* subtle highlight */}
      <span className="pointer-events-none absolute -top-10 left-1/2 h-20 w-40 -translate-x-1/2 rounded-full bg-white/10 blur-2xl" />
      <span className="relative z-10">{children}</span>
    </button>
  );
}
