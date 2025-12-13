import * as React from "react";

// Minimal "shadcn-like" Select API surface used by this project.
// This is not a full headless UI implementation; it's a simple styled <select>.

export function Select({ value, onValueChange, children, ...props }) {
  // We ignore children composition and expect SelectItem values.
  const items = React.Children.toArray(children).filter(Boolean);
  const options = [];
  for (const child of items) {
    if (child?.type?.displayName === "SelectContent") {
      const contentChildren = React.Children.toArray(child.props.children).filter(Boolean);
      for (const cc of contentChildren) {
        if (cc?.type?.displayName === "SelectItem") {
          options.push({ value: cc.props.value, label: cc.props.children });
        }
      }
    }
  }

  return (
    <select
      value={value ?? ""}
      onChange={(e) => onValueChange?.(e.target.value)}
      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-white/30 focus:bg-white/8 transition"
      {...props}
    >
      <option value="" disabled>
        Select…
      </option>
      {options.map((o) => (
        <option key={o.value} value={o.value} className="text-black">
          {o.label}
        </option>
      ))}
    </select>
  );
}

export function SelectTrigger({ children }) {
  return <>{children}</>;
}
export function SelectValue({ placeholder }) {
  return <span className="text-white/60">{placeholder}</span>;
}
export function SelectContent({ children }) {
  return <>{children}</>;
}
SelectContent.displayName = "SelectContent";

export function SelectItem({ children }) {
  return <>{children}</>;
}
SelectItem.displayName = "SelectItem";
