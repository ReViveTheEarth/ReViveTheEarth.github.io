import * as React from "react";

export const Textarea = React.forwardRef(function Textarea({ className = "", ...props }, ref) {
  return (
    <textarea
      ref={ref}
      className={
        "w-full min-h-[120px] rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none " +
        "focus:border-white/30 focus:bg-white/8 transition resize-y " +
        className
      }
      {...props}
    />
  );
});
