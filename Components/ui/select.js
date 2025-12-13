import * as React from "react";

const SelectCtx = React.createContext(null);

export function Select({ value, defaultValue, onValueChange, children }) {
  const [internal, setInternal] = React.useState(defaultValue ?? "");
  const current = value ?? internal;

  const setValue = (v) => {
    if (value === undefined) setInternal(v);
    onValueChange?.(v);
  };

  return (
    <SelectCtx.Provider value={{ value: current, setValue }}>
      {children}
    </SelectCtx.Provider>
  );
}

export function SelectTrigger({ className = "", children }) {
  const ctx = React.useContext(SelectCtx);
  const items = React.useMemo(() => collectItems(children), [children]);
  const placeholder = React.useMemo(() => findPlaceholder(children) ?? "Select…", [children]);

  return (
    <select
      value={ctx?.value ?? ""}
      onChange={(e) => ctx?.setValue?.(e.target.value)}
      className={
        "w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none " +
        "focus:border-white/20 focus:ring-2 focus:ring-white/10 " +
        className
      }
    >
      <option value="" disabled>{placeholder}</option>
      {items.map((it) => (
        <option key={it.value} value={it.value}>
          {it.label}
        </option>
      ))}
    </select>
  );
}

export function SelectValue() { return null; }
export function SelectContent({ children }) { return <>{children}</>; }
export function SelectItem() { return null; }

function collectItems(children) {
  const items = [];
  walk(children, (el) => {
    if (el.type === SelectItem) {
      const value = el.props?.value ?? "";
      const label = typeof el.props?.children === "string" ? el.props.children : String(el.props?.children ?? value);
      if (value) items.push({ value, label });
    }
  });
  return items;
}

function findPlaceholder(children) {
  let placeholder;
  walk(children, (el) => {
    if (el.type === SelectValue && el.props?.placeholder) placeholder = el.props.placeholder;
  });
  return placeholder;
}

function walk(children, fn) {
  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;
    fn(child);
    if (child.props?.children) walk(child.props.children, fn);
  });
}
