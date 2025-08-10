import React from "react";
export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-2 py-1 text-xs rounded-full bg-white/10 border border-white/15 text-slate-200">
      {children}
    </span>
  );
}
