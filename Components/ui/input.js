import * as React from "react";

export const Input = React.forwardRef(function Input({ className = "", ...props }, ref) {
  return (
    <input
      ref={ref}
      className={
        "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none " +
        "focus:border-white/30 focus:bg-white/8 transition " +
        className
      }
      {...props}
    />
  );
});
