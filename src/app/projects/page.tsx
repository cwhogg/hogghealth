import { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectVisual } from "@/components/ProjectVisual";

export const metadata: Metadata = {
  title: "Projects | HoggHealth Consulting",
  description:
    "AI-powered tools for health data access, rare disease diagnosis, clinical research, and real-world evidence.",
};

const projects = [
  {
    category: "Data & Analytics",
    name: "Open Health Data Hub",
    tagline: "Natural language access to federal health data",
    description:
      "Ask questions in plain English about 700M+ records across Medicaid, Medicare, BRFSS, and NHANES. AI translates your questions into SQL queries and delivers interactive tables and charts — no technical expertise required. Over 2,000 queries from 300+ users to date. Designed for researchers, policymakers, and health systems who need fast answers from complex public datasets without writing code or waiting on analysts.",
    tech: ["Next.js", "Claude AI", "DuckDB", "Recharts", "Vercel"],
    url: "https://www.openhealthdatahub.com/",
    date: "Feb 2026",
  },
  {
    category: "Clinical Decision Support",
    name: "Second Look",
    tagline: "AI-powered rare disease differential diagnosis",
    description:
      "A multi-agent AI pipeline that helps patients navigate the diagnostic odyssey for rare diseases. Input symptoms through a guided form and receive a prioritized differential grounded in a curated knowledge base of 7,000+ rare and orphan diseases. Built to reduce the average 5–7 year diagnostic delay by surfacing conditions that generalists might not consider, with supporting evidence and next-step recommendations. Early validation on the Phenopacket2Prompt benchmark (9,587 clinical vignettes) shows SecondLook matching Exomiser's diagnostic accuracy — without access to patient genetic data — and significantly outperforming frontier LLMs like o1-preview and GPT-4o used alone.",
    tech: ["Next.js", "GPT-4.6", "Claude", "MDX", "Radix UI"],
    url: "https://secondlook.vercel.app/",
    date: "Jan 2026",
  },
  {
    category: "Clinical Research",
    name: "N of One",
    tagline: "Design and conduct observational clinical studies",
    description:
      "AI-powered platform for single-patient observational studies with automated protocol generation. Sponsors create studies, participants join via invitation to complete Patient-Reported Outcome surveys with built-in compliance tracking. Enables decentralized research at the individual level — ideal for rare diseases, off-label treatments, and personalized medicine where traditional RCTs are impractical.",
    tech: ["Next.js", "Supabase", "OpenAI", "Resend", "Playwright"],
    url: "https://nofone.us",
    date: "Jan 2026",
  },
  {
    category: "Research Tools",
    name: "Synthetic Patients for Research",
    tagline: "Digital personas of patients with rare disease",
    description:
      "Learn from AI-generated patient personas representing rare disease experiences. Ask about their symptoms, treatments, daily challenges, and opinions to inform research, drug development, and clinical trial design. Each persona is grounded in published literature and patient community data, providing an always-available proxy for qualitative patient research without the recruitment burden.",
    tech: ["Next.js", "OpenAI", "Supabase", "Radix UI"],
    url: "https://patient-agent-mg.vercel.app/",
    date: "Oct 2025",
  },
  {
    category: "Real-World Evidence",
    name: "RedditRx",
    tagline: "Mine Reddit for real-world treatment insights",
    description:
      "Analyze Reddit discussions to discover what interventions real patients report working for specific medical problems. Surfaces community-driven treatment experiences and sentiment at scale. Useful for pharma market research, patient advocacy organizations, and clinicians looking to understand what patients actually try — and what they say works — outside of clinical trials.",
    tech: ["Next.js", "AI Analysis", "Reddit Data"],
    url: "https://redditrx.vercel.app/",
    date: "Sep 2025",
  },
  {
    category: "Business Intelligence",
    name: "Will Pharma Like Me?",
    tagline: "Assess your pharma partnership potential",
    description:
      "Enter your company URL and get an AI-powered assessment of your fit for pharmaceutical partnerships. Analyzes your positioning, offerings, and market alignment against pharma partner selection criteria. Helps digital health companies, CROs, and service providers understand how they appear to potential pharma partners and where to strengthen their pitch.",
    tech: ["Next.js", "AI Analysis", "Web Scraping"],
    url: "https://pharma-sales-analyzer.vercel.app",
    date: "Feb 2025",
  },
  {
    category: "Health Education",
    name: "What is that Disease?",
    tagline: "Instant comprehensive disease profiles",
    description:
      "Enter any disease name and receive a detailed AI-generated profile covering symptoms, prevalence, treatments, prognosis, and related conditions. A quick-reference tool for patients, caregivers, and researchers who need a reliable starting point for understanding unfamiliar diagnoses without wading through dense medical literature.",
    tech: ["Next.js", "OpenAI", "Tailwind CSS"],
    url: "https://whatisthatdisease.vercel.app",
    date: "Jan 2025",
  },
];

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
