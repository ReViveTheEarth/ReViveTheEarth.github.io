import * as React from "react";

/**
 * Minimal "shadcn-like" select API to satisfy Base44 exports.
 * This is not a full headless UI implementation; it's a lightweight wrapper so the app builds.
 */

export function Select({ children }) {
  return <div className="relative">{children}</div>;
}

export function SelectTrigger({ className = "", children, ...props }) {
  return (
    <button
      type="button"
      className={
        "w-full flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white " +
        "focus:border-white/20 focus:ring-2 focus:ring-white/10 " +
        className
      }
      {...props}
    >
      {children}
    </button>
  );
}

export function SelectValue({ placeholder = "Select...", children }) {
  return <span className="text-white/90">{children || <span className="text-white/40">{placeholder}</span>}</span>;
}

export function SelectContent({ className = "", children }) {
  return (
    <div
      className={
        "mt-2 rounded-xl border border-white/10 bg-black/60 backdrop-blur p-1 max-h-64 overflow-auto " +
        className
      }
    >
      {children}
    </div>
  );
}

export function SelectItem({ className = "", children, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={
        "w-full text-left px-3 py-2 rounded-lg text-sm text-white/90 hover:bg-white/10 " + className
      }
    >
      {children}
    </button>
  );
}
