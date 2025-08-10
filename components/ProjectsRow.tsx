"use client";
import ProjectCard from "./ProjectCard";
import { DATA } from "./data";

export default function ProjectsRow() {
  return (
    <div className="-mx-4">
      <div className="px-4 overflow-x-auto scroll-smooth snap-x snap-mandatory [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-4 min-w-full">
          {DATA.projects.map((p, i) => (
            <div key={i} className="snap-start shrink-0 w-[92%] sm:w-[520px]">
              <ProjectCard p={p} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
