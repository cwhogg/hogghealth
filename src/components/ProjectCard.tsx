import { type ReactNode } from "react";

interface ProjectCardProps {
  category: string;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  url: string;
  date: string;
  index: number;
  visual?: ReactNode;
}

export function ProjectCard({
  category,
  name,
  tagline,
  description,
  tech,
  url,
  date,
  index,
  visual,
}: ProjectCardProps) {
  const visualFirst = index % 2 === 0;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="card-hover block group animate-fade-in-up"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className={`flex flex-col-reverse ${visualFirst ? "md:flex-row" : "md:flex-row-reverse"}`}>
        {/* Visual panel */}
        {visual && (
          <div
            className={`flex items-center justify-center p-5 sm:p-6 md:w-1/2 md:flex-shrink-0 border-t md:border-t-0 ${
              visualFirst ? "md:border-r" : "md:border-l"
            } border-rule-light bg-background/50`}
          >
            {visual}
          </div>
        )}

        {/* Text panel */}
        <div className={`flex-1 p-6 sm:p-7 ${visual ? "" : "w-full"}`}>
          <div className="flex items-center justify-between mb-3">
            <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-accent">
              {category}
            </p>
            <span className="font-sans text-[0.6875rem] text-muted">{date}</span>
          </div>
          <h3 className="font-headline text-xl sm:text-[1.375rem] text-foreground mb-1.5 group-hover:text-accent transition-colors">
            {name}
          </h3>
          <p className="font-subhead italic text-body text-sm mb-3">{tagline}</p>
          <p className="font-serif text-body text-[0.8125rem] leading-relaxed mb-5">
            {description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {tech.map((t) => (
              <span key={t} className="tech-pill">
                {t}
              </span>
            ))}
          </div>
          <div className="mt-5 flex items-center gap-1.5 font-sans text-xs font-semibold uppercase tracking-[0.1em] text-teal group-hover:text-teal-hover transition-colors">
            Visit Project
            <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
}
