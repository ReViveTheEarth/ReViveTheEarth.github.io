import * as React from "react";

const SelectCtx = React.createContext(null);

export function Select({ value, defaultValue, onValueChange, children }) {
  const [open, setOpen] = React.useState(false);
  const [internalValue, setInternalValue] = React.useState(defaultValue ?? "");
  const itemsRef = React.useRef(new Map());

  const currentValue = value !== undefined ? value : internalValue;

  const setValue = React.useCallback(
    (next) => {
      if (value === undefined) setInternalValue(next);
      onValueChange?.(next);
    },
    [value, onValueChange]
  );

  const ctx = React.useMemo(
    () => ({
      open,
      setOpen,
      value: currentValue,
      setValue,
      itemsRef,
    }),
    [open, currentValue, setValue]
  );

  // Close dropdown on outside click
  const containerRef = React.useRef(null);
  React.useEffect(() => {
    function onDocClick(e) {
      if (!open) return;
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  return (
    <SelectCtx.Provider value={ctx}>
      <div ref={containerRef} className="relative">
        {children}
      </div>
    </SelectCtx.Provider>
  );
}

export function SelectTrigger({ className = "", children }) {
  const ctx = React.useContext(SelectCtx);
  if (!ctx) return null;

  return (
    <button
      type="button"
      onClick={() => ctx.setOpen(!ctx.open)}
      className={
        "w-full flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none " +
        "focus:border-white/20 focus:ring-2 focus:ring-white/10 " +
        className
      }
      aria-haspopup="listbox"
      aria-expanded={ctx.open}
    >
      <span className="flex-1 text-left">{children}</span>
      <span className="ml-2 text-white/50">▾</span>
    </button>
  );
}

export function SelectValue({ placeholder = "Select..." }) {
  const ctx = React.useContext(SelectCtx);
  if (!ctx) return null;

  const label = ctx.itemsRef.current.get(ctx.value);
  const text = label ?? ctx.value ?? "";

  return (
    <span className={text ? "text-white" : "text-white/40"}>
      {text || placeholder}
    </span>
  );
}

export function SelectContent({ className = "", children }) {
  const ctx = React.useContext(SelectCtx);
  if (!ctx || !ctx.open) return null;

  return (
    <div
      role="listbox"
      className={
        "absolute z-50 mt-2 w-full overflow-hidden rounded-xl border border-white/10 bg-slate-950/95 backdrop-blur-xl shadow-xl " +
        className
      }
    >
      <div className="max-h-64 overflow-auto p-1">{children}</div>
    </div>
  );
}

export function SelectItem({ value, children, className = "" }) {
  const ctx = React.useContext(SelectCtx);
  if (!ctx) return null;

  // Register label for SelectValue display
  React.useEffect(() => {
    ctx.itemsRef.current.set(
      value,
      typeof children === "string" ? children : String(value)
    );
  }, [ctx, value, children]);

  const active = ctx.value === value;

  return (
    <button
      type="button"
      role="option"
      aria-selected={active}
      onClick={() => {
        ctx.setValue(value);
        ctx.setOpen(false);
      }}
      className={
        "w-full rounded-lg px-3 py-2 text-left text-sm transition " +
        (active ? "bg-white/10 text-white" : "text-white/80 hover:bg-white/5") +
        " " +
        className
      }
    >
      {children}
    </button>
  );
}
