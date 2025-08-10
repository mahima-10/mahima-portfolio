import React from "react";
export default function Section({
  id, title, children
}: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="px-0 py-10">
      <h2 className="max-w-6xl mx-auto px-4 text-2xl md:text-3xl font-bold mb-6 text-white">{title}</h2>
      {children}
    </section>
  );
}
