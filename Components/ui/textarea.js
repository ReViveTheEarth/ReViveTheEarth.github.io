import * as React from "react";

export const Textarea = React.forwardRef(function Textarea(
  { className = "", ...props },
  ref
) {
  return (
    <textarea
      ref={ref}
      className={
        "w-full min-h-[120px] rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none " +
        "placeholder:text-white/40 focus:border-white/20 focus:ring-2 focus:ring-white/10 " +
        className
      }
      {...props}
    />
  );
});
