import Image from "next/image";
import { DATA } from "./data";

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <Image src="/hero.jpeg" alt="hero" fill priority className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/70 to-slate-900" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 pt-24 pb-16 grid md:grid-cols-[1.2fr_.8fr] gap-8 items-center">
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6">
          <p className="text-slate-200/80 text-sm uppercase tracking-wider">Engineering Portfolio</p>
          <h1 className="mt-2 text-3xl md:text-5xl font-extrabold text-white leading-tight">{DATA.name}</h1>
          <p className="text-slate-300 mt-1">{DATA.role}</p>
          <p className="mt-4 text-slate-200/90 max-w-2xl">{DATA.blurb}</p>
          <div className="mt-6 flex gap-3">
            <a href="#projects" className="px-5 py-2.5 rounded-lg bg-white text-slate-900 font-medium hover:opacity-90">View Projects</a>
            <a href="#contact" className="px-5 py-2.5 rounded-lg border border-white/20 text-white hover:bg-white/10">Contact</a>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="relative p-1 rounded-3xl bg-gradient-to-br from-blue-400/40 to-teal-300/40">
            <div className="rounded-3xl bg-slate-900/60 p-6 h-full">
              <div className="text-sm text-slate-300">Highlights</div>
              <ul className="mt-3 space-y-2 text-slate-200">
                <li>• ESP32 + mmWave radar firmware</li>
                <li>• <b>Python</b> backend with FastAPI + LLM agents</li>
                <li>• Real-time fall & sleep analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
