import { Cpu, Database, Waves, Bot, Cloud } from "lucide-react";
import { DATA } from "./data";

const pickIcon = (s: string) => {
  const k = s.toLowerCase();
  if (k.includes("esp32") || k.includes("mmwave")) return <Waves size={16} />;
  if (k.includes("sql") || k.includes("mongo")) return <Database size={16} />;
  if (k.includes("tensor") || k.includes("ai") || k.includes("llm")) return <Bot size={16} />;
  if (k.includes("docker") || k.includes("kafka") || k.includes("spark")) return <Cloud size={16} />;
  return <Cpu size={16} />;
};

export default function Skills() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
      {DATA.skills.map((s) => (
        <span key={s} className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
          {pickIcon(s)} {s}
        </span>
      ))}
    </div>
  );
}
