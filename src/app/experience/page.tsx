import type { Metadata } from "next";
import { experience, education, patents } from "@/data/cv";

export const metadata: Metadata = {
  title: "Experience — Chris Hogg | HoggHealth Consulting",
  description:
    "Career history, patents, and education for Chris Hogg — healthcare founder, operator, and AI builder.",
};

export default function ExperiencePage() {
  return (
    <>
      {/* Header */}
      <section className="max-w-[1080px] mx-auto px-4 sm:px-8 pt-12 sm:pt-16 pb-10 animate-fade-in-up">
        <h1 className="font-headline text-[2rem] sm:text-[2.5rem] leading-tight text-foreground mb-2">
          Experience
        </h1>
        <p className="font-subhead italic text-body text-base sm:text-lg max-w-2xl">
          From biotech research and investment banking to founding, scaling, and
          selling healthcare companies
        </p>
      </section>

      <hr className="rule max-w-[1080px] mx-auto" />

      {/* Career Timeline */}
      <section className="max-w-[1080px] mx-auto px-4 sm:px-8 py-10 sm:py-14">
        <div className="section-label mb-8">Career</div>
        <div className="space-y-0">
          {experience.map((job, i) => (
            <div
              key={i}
              className="relative pl-8 pb-10 border-l-2 border-rule last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-accent border-2 border-background" />

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                <div>
                  <h3 className="font-headline text-lg sm:text-xl text-foreground">
                    {job.company}
                  </h3>
                  <p className="font-sans text-xs text-muted mt-0.5">
                    {job.location}
                  </p>
                </div>
                {job.exit && (
                  <span className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-teal bg-teal/8 px-2.5 py-1 rounded-sm w-fit flex-shrink-0">
                    {job.exit}
                  </span>
                )}
              </div>

              {/* Roles within company */}
              <div className="space-y-1 mb-3">
                {job.roles.map((role, j) => (
                  <div key={j} className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
                    <p className="font-sans text-sm font-semibold text-foreground">
                      {role.title}
                    </p>
                    <span className="font-sans text-xs text-muted">
                      {role.dates}
                    </span>
                  </div>
                ))}
              </div>

              <p className="font-serif text-[0.8125rem] text-body leading-relaxed max-w-2xl">
                {job.description}
              </p>

              {job.bullets && (
                <ul className="list-disc list-outside pl-4 mt-2 space-y-1">
                  {job.bullets.map((b, m) => (
                    <li
                      key={m}
                      className="font-serif text-[0.8125rem] text-body leading-relaxed max-w-2xl"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              )}

            </div>
          ))}
        </div>
      </section>

      <hr className="rule max-w-[1080px] mx-auto" />

      {/* Education */}
      <section className="max-w-[1080px] mx-auto px-4 sm:px-8 py-10 sm:py-14">
        <div className="section-label mb-8">Education</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <div key={i} className="card p-6">
              <h3 className="font-sans text-sm font-bold text-foreground mb-1">
                {edu.school}
              </h3>
              <p className="font-subhead italic text-body text-sm mb-0.5">
                {edu.degree}, {edu.field}
              </p>
              <p className="font-sans text-xs text-muted">{edu.dates}</p>
              {edu.note && (
                <p className="font-serif text-xs text-muted mt-2">{edu.note}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <hr className="rule max-w-[1080px] mx-auto" />

      {/* Patents */}
      <section className="max-w-[1080px] mx-auto px-4 sm:px-8 py-10 sm:py-14">
        <div className="section-label mb-8">Patents (7)</div>
        <div className="space-y-4">
          {patents.map((patent, i) => (
            <div
              key={i}
              className="card p-5 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1"
            >
              <div>
                <h3 className="font-sans text-sm font-medium text-foreground leading-snug">
                  {patent.title}
                </h3>
                <p className="font-sans text-xs text-muted mt-1">
                  {patent.number}
                </p>
              </div>
              <span className="font-sans text-xs text-muted whitespace-nowrap flex-shrink-0">
                {patent.date}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
