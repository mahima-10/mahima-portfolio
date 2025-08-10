import React from "react";
import { ExternalLink } from "lucide-react";
import Badge from "./Badge";

type Link = Readonly<{ label: string; href: string }>;
type Project = Readonly<{
  title: string;
  tagline: string;        // from DATA.projects[].tagline
  description: string;    // from DATA.projects[].description
  stack: ReadonlyArray<string>;
  links: ReadonlyArray<Link>;
}>;

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <article
      className="
        group relative overflow-hidden rounded-2xl
        border border-white/10 bg-white/[0.07] backdrop-blur-md
        transition hover:bg-white/[0.12]
      "
    >
      {/* subtle accent ring on hover */}
      <span
        className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-blue-300/0 group-hover:ring-2 group-hover:ring-blue-300/30 transition"
        aria-hidden
      />

      <div className="p-5">
        {/* Title + tagline */}
        <h3 className="text-2xl font-semibold tracking-tight text-white">
          {p.title}
        </h3>
        <p className="mt-1 text-sm text-slate-300">
          {p.tagline}
        </p>

        {/* Description */}
        <p className="mt-4 leading-relaxed text-slate-200">
          {p.description}
        </p>

        {/* Tech stack */}
        <div className="mt-4 flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </div>

        {/* Links */}
        <div className="mt-4 flex gap-4">
          {p.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              className="inline-flex items-center gap-1 text-blue-300 hover:text-blue-200 hover:underline"
            >
              <ExternalLink size={16} /> {l.label}
            </a>
          ))}
        </div>
      </div>

      {/* bottom divider accent */}
      <div className="mx-5 mb-4 h-[2px] rounded-full bg-gradient-to-r from-transparent via-slate-400/30 to-transparent group-hover:via-blue-300/40 transition" />
    </article>
  );
}
