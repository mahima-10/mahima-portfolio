"use client";
import React, { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Phone, Moon, Sun, FileText } from "lucide-react";
import { DATA } from "./data";

export default function Header() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <header className="max-w-5xl mx-auto px-4 pt-6 pb-4 flex items-center justify-between">
      <div>
        <span className="inline-block px-2 py-0.5 text-xs rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900">Portfolio</span>
      </div>
      <div className="flex items-center gap-3">
        <a href={DATA.social.github} target="_blank" aria-label="GitHub" className="hover:opacity-80"><Github/></a>
        <a href={DATA.social.linkedin} target="_blank" aria-label="LinkedIn" className="hover:opacity-80"><Linkedin/></a>
        <a href={`mailto:${DATA.email}`} aria-label="Email" className="hover:opacity-80"><Mail/></a>
        <a href={`tel:${DATA.phone.replace(' ', '')}`} aria-label="Phone" className="hover:opacity-80"><Phone/></a>
        <a href={DATA.resumeUrl} target="_blank" aria-label="Resume" className="hover:opacity-80"><FileText/></a>
        <button onClick={() => setDark(d => !d)} className="ml-1 p-2 rounded-lg border border-slate-300 dark:border-slate-700">{dark ? <Sun size={18}/> : <Moon size={18}/>}</button>
      </div>
    </header>
  );
}
