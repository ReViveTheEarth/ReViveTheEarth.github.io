import * as React from "react";

export const Input = React.forwardRef(function Input(
  { className = "", ...props },
  ref
) {
  return (
    <input
      ref={ref}
      className={
        "w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none " +
        "placeholder:text-white/40 focus:border-white/20 focus:ring-2 focus:ring-white/10 " +
        className
      }
      {...props}
    />
  );
});
