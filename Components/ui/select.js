import * as React from "react";

// Lightweight "shadcn-style" Select shims to match Base44 imports.
// This is NOT a full headless UI select; it is a styled native select.
export function Select({ value, onValueChange, children }) {
  // Expect children to include <SelectItem value="...">Label</SelectItem>
  const items = React.Children.toArray(children).filter(Boolean);

  return (
    <select
      value={value}
      onChange={(e) => onValueChange?.(e.target.value)}
      className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-white/20 focus:ring-2 focus:ring-white/10"
    >
      {items.map((child) => child)}
    </select>
  );
}

export function SelectItem({ value, children }) {
  return <option value={value}>{children}</option>;
}

// The following are no-ops to keep Base44 JSX compiling.
export function SelectTrigger({ children }) { return <>{children}</>; }
export function SelectValue({ placeholder }) { return <>{placeholder ?? null}</>; }
export function SelectContent({ children }) { return <>{children}</>; }
