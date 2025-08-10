"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const items = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/50 ${scrolled ? "border-b border-slate-200 dark:border-slate-800" : ""}`}>
      <div className="max-w-5xl mx-auto px-4 py-3 flex gap-4 overflow-x-auto">
        {items.map(i => (
          <Link key={i.href} href={i.href} className="text-sm px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 whitespace-nowrap">
            {i.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
