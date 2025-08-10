"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Github, Linkedin, Code } from "lucide-react";
import { DATA } from "./data";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 ${
        scrolled ? "backdrop-blur bg-slate-900/50 border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto h-14 px-4 flex items-center justify-between">
        {/* small brand only */}
        <Link href="#" className="text-white font-semibold tracking-tight">
          {DATA.name}
        </Link>

        {/* social icons on the right */}
        <nav className="flex items-center gap-4">
          <a
            href={DATA.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-white"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={DATA.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-white"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={DATA.social.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-white"
            aria-label="LeetCode"
          >
            <Code size={18} />
          </a>
        </nav>
      </div>
    </header>
  );
}
