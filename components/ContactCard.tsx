import { DATA } from "./data";

export default function ContactCard() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 text-slate-200">
      <h4 className="font-semibold text-white">Get in touch</h4>
      <p className="text-slate-400">
  I’m open to internships, entry-level full-time positions (Junior Python Developer, AI Agent Developer, etc.), research collaborations, and freelance projects.
</p>

      <div className="mt-4 space-y-2">
        <a className="underline" href={`mailto:${DATA.email}`}>{DATA.email}</a>
        <div>{DATA.phone}</div>
      </div>
      <a href={DATA.resumeUrl} target="_blank" className="mt-4 inline-block px-4 py-2 rounded-lg bg-white text-slate-900 hover:opacity-90">
        Download CV
      </a>
    </div>
  );
}
