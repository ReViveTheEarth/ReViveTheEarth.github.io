import React, { useEffect, useMemo, useState } from "react";

function formatNumber(n) {
  try {
    return new Intl.NumberFormat(undefined).format(n);
  } catch {
    return String(n);
  }
}

export default function RecyclingCounter({ targetValue = 0, durationMs = 1600 }) {
  const target = useMemo(() => Math.max(0, Math.floor(targetValue)), [targetValue]);
  const [value, setValue] = useState(0);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const from = value;
    const step = (t) => {
      const p = Math.min(1, (t - start) / durationMs);
      const eased = 1 - Math.pow(1 - p, 3);
      const next = Math.floor(from + (target - from) * eased);
      setValue(next);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  return (
    <div className="inline-flex flex-col items-center">
      <div
        className="relative rounded-3xl px-8 py-6 backdrop-blur-2xl border border-white/10"
        style={{
          background:
            "linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(6, 182, 212, 0.10) 50%, rgba(96, 165, 250, 0.08) 100%)",
          boxShadow: "0 20px 60px -30px rgba(0,0,0,0.75)",
        }}
      >
        <div className="text-4xl md:text-5xl font-bold tracking-tight">
          {formatNumber(value)}
          <span className="text-white/50 text-base md:text-lg font-semibold ml-2">kg</span>
        </div>
        <div className="text-white/55 mt-1">recycled across the network</div>
      </div>
    </div>
  );
}
