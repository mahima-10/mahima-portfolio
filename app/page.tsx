"use client";
import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import ProjectsRow from "@/components/ProjectsRow";
import Section from "@/components/Section";
import Skills from "@/components/Skills";
import ContactCard from "@/components/ContactCard";
import { DATA } from "@/components/data";

export default function Page() {
  return (
    <main className="bg-slate-900 min-h-screen text-slate-200">
      <SiteHeader />
      <Hero />

      <div className="max-w-6xl mx-auto px-4">
        <Section id="projects" title="Projects">
          <ProjectsRow />
        </Section>

        <Section id="skills" title="Skills">
          <Skills />
        </Section>

        <Section id="experience" title="Experience">
          {DATA.experience.map((e: (typeof DATA.experience)[number], i: number) => (
  <div key={i} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 mb-4">
    <h3 className="font-semibold text-white">{e.role} — {e.org}</h3>
    <p className="text-sm text-slate-300">{e.period}</p>
    <ul className="list-disc list-inside mt-2 space-y-1">
      {e.highlights.map((h: string, idx: number) => <li key={idx}>{h}</li>)}
    </ul>
  </div>
))}

        </Section>

        <Section id="education" title="Education">
  <div className="grid md:grid-cols-3 gap-4">
    {DATA.education.map((ed: (typeof DATA.education)[number], i: number) => (
      <div
        key={i}
        className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4"
      >
        <div className="font-medium text-white">{ed.school}</div>
        <div className="text-sm text-slate-300">{ed.degree}</div>
        <div className="text-xs text-slate-400">
          {ed.period}
          {ed.note ? ` · ${ed.note}` : ""}
        </div>
      </div>
    ))}
  </div>
</Section>


        <Section id="contact" title="Contact">
          <ContactCard />
        </Section>

        <footer className="text-center text-xs text-slate-400 py-10">
          © {new Date().getFullYear()} {DATA.name}. Built with Next.js & Tailwind.
        </footer>
      </div>
    </main>
  );
}
