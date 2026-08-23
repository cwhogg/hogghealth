import { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectVisual } from "@/components/ProjectVisual";
import { projects } from "@/data/cv";

export const metadata: Metadata = {
  title: "Projects | HoggHealth Consulting",
  description:
    "AI-powered tools for health data access, rare disease diagnosis, clinical research, and real-world evidence.",
};

export default function ProjectsPage() {
  return (
    <section className="max-w-[1080px] mx-auto px-4 sm:px-8 py-10 sm:py-14">
      <div className="section-label mb-2">Current AI Projects</div>
      <p className="font-serif text-body text-sm leading-relaxed mb-8 max-w-2xl">
        Tools and prototypes exploring how AI can unlock health data, accelerate
        rare disease diagnosis, and reimagine clinical research.
      </p>
      <div className="grid grid-cols-1 gap-6">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.name}
            {...project}
            index={i}
            visual={<ProjectVisual name={project.name} />}
          />
        ))}
      </div>
    </section>
  );
}
