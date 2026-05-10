import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectVisual } from "@/components/ProjectVisual";
import { PharmaLogos, DigitalHealthLogos } from "@/components/CompanyLogos";

const projects = [
  {
    category: "Data & Analytics",
    name: "Open Health Data Hub",
    tagline: "Natural language access to federal health data",
    description:
      "Ask questions in plain English about 700M+ records across Medicaid, Medicare, BRFSS, and NHANES. AI translates your questions into SQL queries and delivers interactive tables and charts — no technical expertise required. Over 2,000 queries from 300+ users to date.",
    tech: ["Next.js", "Claude AI", "DuckDB", "Recharts", "Vercel"],
    url: "https://www.openhealthdatahub.com/",
    date: "Feb 2026",
  },
  {
    category: "Clinical Decision Support",
    name: "Second Look",
    tagline: "AI-powered rare disease differential diagnosis",
    description:
      "A multi-agent AI pipeline that helps patients navigate the diagnostic odyssey for rare diseases. Input symptoms through a guided form and receive a prioritized differential grounded in a curated knowledge base of 7,000+ rare and orphan diseases.",
    tech: ["Next.js", "GPT-4.6", "Claude", "MDX", "Radix UI"],
    url: "https://secondlook.vercel.app/",
    date: "Jan 2026",
  },
  {
    category: "Clinical Research",
    name: "N of One",
    tagline: "Design and conduct observational clinical studies",
    description:
      "AI-powered platform for single-patient observational studies with automated protocol generation. Sponsors create studies, participants join via invitation to complete Patient-Reported Outcome surveys with built-in compliance tracking.",
    tech: ["Next.js", "Supabase", "OpenAI", "Resend", "Playwright"],
    url: "https://nofone.us",
    date: "Jan 2026",
  },
  {
    category: "Research Tools",
    name: "Synthetic Patients for Research",
    tagline: "Digital personas of patients with rare disease",
    description:
      "Learn from AI-generated patient personas representing rare disease experiences. Ask about their symptoms, treatments, daily challenges, and opinions to inform research, drug development, and clinical trial design.",
    tech: ["Next.js", "OpenAI", "Supabase", "Radix UI"],
    url: "https://patient-agent-mg.vercel.app/",
    date: "Oct 2025",
  },
  {
    category: "Real-World Evidence",
    name: "RedditRx",
    tagline: "Mine Reddit for real-world treatment insights",
    description:
      "Analyze Reddit discussions to discover what interventions real patients report working for specific medical problems. Surfaces community-driven treatment experiences and sentiment at scale.",
    tech: ["Next.js", "AI Analysis", "Reddit Data"],
    url: "https://redditrx.vercel.app/",
    date: "Sep 2025",
  },
  {
    category: "Business Intelligence",
    name: "Will Pharma Like Me?",
    tagline: "Assess your pharma partnership potential",
    description:
      "Enter your company URL and get an AI-powered assessment of your fit for pharmaceutical partnerships. Analyzes your positioning, offerings, and market alignment against pharma partner selection criteria.",
    tech: ["Next.js", "AI Analysis", "Web Scraping"],
    url: "https://pharma-sales-analyzer.vercel.app",
    date: "Feb 2025",
  },
  {
    category: "Health Education",
    name: "What is that Disease?",
    tagline: "Instant comprehensive disease profiles",
    description:
      "Enter any disease name and receive a detailed AI-generated profile covering symptoms, prevalence, treatments, prognosis, and related conditions. A quick-reference tool for patients, caregivers, and researchers.",
    tech: ["Next.js", "OpenAI", "Tailwind CSS"],
    url: "https://whatisthatdisease.vercel.app",
    date: "Jan 2025",
  },
];

const experience = [
  {
    company: "HoggHealth Consulting",
    role: "Fractional Product & GTM Leader",
    period: "2025 – Present",
    description: "Helping growth-stage companies with product, data, and GTM strategies. Currently focused on pharma DTP programs for patients with complex and rare diseases. Recent partnerships between manufacturers (Lilly, Eisai, Biogen, UCB) and virtual care providers (Synapticure, Heartbeat Health, LiverRight, AmplifyMD)",
  },
  {
    company: "Marley Medical",
    role: "Co-founder & CEO",
    period: "2021 – 2024",
    description: "Virtual care and fee-for-service chronic disease management. Connected health and data-driven. Funded by a16z, CRV, Rock Health",
    exit: "Sold to Starlight",
  },
  {
    company: "Propeller Health",
    role: "COO, CCO & Head of Product",
    period: "2014 – 2020",
    description: "Digital therapeutics for asthma and COPD. Scaled product, commercial operations, and pharma partnerships. 7 patents",
    exit: "Acquired by ResMed",
  },
  {
    company: "Practice Fusion",
    role: "Head of Data Science",
    period: "2013 – 2014",
    description: "Built data science team and EHR data products for 100K+ physicians. Created the foundation of Practice Fusion's pharma data business, now part of Veradigm",
    exit: "Acquired by Allscripts",
  },
  {
    company: "100Plus",
    role: "Co-founder & CEO",
    period: "2011 – 2013",
    description: "Early longevity company using data and predictive analytics. Funded by Founders Fund, Greylock, Felicis Ventures",
    exit: "Acquired by Practice Fusion",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-[1080px] mx-auto px-4 sm:px-8 pt-12 sm:pt-16 pb-10">
        <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-10 animate-fade-in-up">
          <Image
            src="/headshot.jpeg"
            alt="Chris Hogg"
            width={160}
            height={320}
            className="rounded-sm object-cover w-[120px] h-auto sm:w-[160px] sm:self-stretch flex-shrink-0"
          />
          <div>
            <h1 className="font-headline text-[2rem] sm:text-[2.5rem] leading-tight text-foreground mb-2">
              Chris Hogg
            </h1>
            <p className="font-subhead italic text-body text-base sm:text-lg mb-3">
              Healthcare founder, operator, product and data geek, now building with AI
            </p>
            <p className="font-serif text-body text-sm leading-relaxed max-w-2xl">
              Founder and operator in digital health and virtual care since
              2011. Made chronic disease management data-driven and
              proactive at Marley Medical. Helped scale Propeller Health as
              COO, CCO and head of product through its acquisition by ResMed.
              Founded 100Plus, an early longevity company, in 2011 and sold
              to PracticeFusion. Now applying AI to unlock health data,
              accelerate rare disease diagnosis, and reimagine clinical
              research and patient journeys. Advises growth-stage companies
              on data strategy, product, and go-to-market. Currently focused
              on pharma-funded DTP solutions that connect manufacturers and
              virtual care providers to increase patient access to specialty
              and subspecialty care.
            </p>
          </div>
        </div>
      </section>

      <hr className="rule max-w-[1080px] mx-auto" />

      {/* Areas of Focus */}
      <section className="max-w-[1080px] mx-auto px-4 sm:px-8 py-10 sm:py-14">
        <div className="section-label mb-8">Areas of Focus</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Partnering with Pharma */}
          <div className="card p-5 sm:p-6 flex flex-col">
            <h3 className="font-headline text-lg text-foreground mb-2">Partnering with Pharma</h3>
            <p className="font-serif text-body text-[0.8125rem] leading-relaxed mb-4">
              Structuring partnerships between life science companies and innovative healthcare startups.
            </p>
            <div className="space-y-4">
              <div>
                <p className="font-sans text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-muted mb-2">Life Sciences</p>
                <PharmaLogos />
              </div>
              <div>
                <p className="font-sans text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-muted mb-2">Digital Health &amp; Virtual Care</p>
                <DigitalHealthLogos />
              </div>
            </div>
          </div>

          {/* Data Products */}
          <div className="card p-5 sm:p-6 flex flex-col">
            <h3 className="font-headline text-lg text-foreground mb-2">Data Products (now with AI)</h3>
            <p className="font-serif text-body text-[0.8125rem] leading-relaxed mb-4">
              Designing and building data products that turn data into patient insight and proactive care.
            </p>
            <div className="space-y-3">
              <div className="border border-rule rounded-sm overflow-hidden">
                <Image
                  src="/propeller-app.png"
                  alt="Propeller Health patient app — daily asthma forecast and connected inhaler"
                  width={851}
                  height={481}
                  className="w-full h-24 object-cover"
                />
                <p className="font-sans text-[0.625rem] text-muted px-2 py-1.5">Propeller Health — Patient App</p>
              </div>
              <div className="border border-rule rounded-sm overflow-hidden">
                <Image
                  src="/physician-dashboard.png"
                  alt="Physician dashboard — patient vitals, lab results, and treatment management"
                  width={1100}
                  height={980}
                  className="w-full h-24 object-cover object-top"
                />
                <p className="font-sans text-[0.625rem] text-muted px-2 py-1.5">Marley Medical — Physician Dashboard</p>
              </div>
            </div>
          </div>

          {/* Go-to-Market Strategy */}
          <div className="card p-5 sm:p-6 flex flex-col">
            <h3 className="font-headline text-lg text-foreground mb-2">Go-to-Market Strategy</h3>
            <p className="font-serif text-body text-[0.8125rem] leading-relaxed mb-4">
              Unravelling the complexity of healthcare GTM. Usually the hard part of healthcare innovation is how to get paid.
            </p>
            <div className="flex justify-center">
              <svg viewBox="0 0 240 224" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[200px] h-auto">
                {/* Center hub */}
                <circle cx="120" cy="120" r="24" fill="var(--accent)" fillOpacity="0.08" stroke="var(--accent)" strokeWidth="1.5" />
                <text x="120" y="117" fontSize="8" fontFamily="var(--font-dm-sans), sans-serif" fontWeight="700" fill="var(--accent)" textAnchor="middle">Your</text>
                <text x="120" y="127" fontSize="8" fontFamily="var(--font-dm-sans), sans-serif" fontWeight="700" fill="var(--accent)" textAnchor="middle">Product</text>

                {/* Payers — top (0°) */}
                <rect x="90" y="23" width="60" height="26" rx="2" fill="var(--teal)" fillOpacity="0.08" stroke="var(--teal)" strokeWidth="1" />
                <text x="120" y="40" fontSize="9" fontFamily="var(--font-dm-sans), sans-serif" fontWeight="600" fill="var(--teal)" textAnchor="middle">Payers</text>
                <line x1="120" y1="96" x2="120" y2="52" stroke="var(--rule)" strokeWidth="1.5" markerEnd="url(#arrowGTM)" />

                {/* Health Systems — upper right (60°) */}
                <rect x="163" y="64" width="60" height="28" rx="2" fill="var(--teal)" fillOpacity="0.08" stroke="var(--teal)" strokeWidth="1" />
                <text x="193" y="75" fontSize="8" fontFamily="var(--font-dm-sans), sans-serif" fontWeight="600" fill="var(--teal)" textAnchor="middle">Health</text>
                <text x="193" y="85" fontSize="8" fontFamily="var(--font-dm-sans), sans-serif" fontWeight="600" fill="var(--teal)" textAnchor="middle">Systems</text>
                <line x1="141" y1="108" x2="166" y2="94" stroke="var(--rule)" strokeWidth="1.5" markerEnd="url(#arrowGTM)" />

                {/* Pharma — lower right (120°) */}
                <rect x="163" y="149" width="60" height="26" rx="2" fill="var(--teal)" fillOpacity="0.08" stroke="var(--teal)" strokeWidth="1" />
                <text x="193" y="166" fontSize="9" fontFamily="var(--font-dm-sans), sans-serif" fontWeight="600" fill="var(--teal)" textAnchor="middle">Pharma</text>
                <line x1="141" y1="132" x2="168" y2="147" stroke="var(--rule)" strokeWidth="1.5" markerEnd="url(#arrowGTM)" />

                {/* Employers — bottom (180°) */}
                <rect x="90" y="191" width="60" height="26" rx="2" fill="var(--foreground)" fillOpacity="0.04" stroke="var(--rule)" strokeWidth="1" />
                <text x="120" y="208" fontSize="9" fontFamily="var(--font-dm-sans), sans-serif" fontWeight="600" fill="var(--body)" textAnchor="middle">Employers</text>
                <line x1="120" y1="144" x2="120" y2="188" stroke="var(--rule)" strokeWidth="1.5" markerEnd="url(#arrowGTM)" />

                {/* DTC — lower left (240°) */}
                <rect x="17" y="149" width="60" height="26" rx="2" fill="var(--foreground)" fillOpacity="0.04" stroke="var(--rule)" strokeWidth="1" />
                <text x="47" y="166" fontSize="9" fontFamily="var(--font-dm-sans), sans-serif" fontWeight="600" fill="var(--body)" textAnchor="middle">DTC</text>
                <line x1="99" y1="132" x2="72" y2="147" stroke="var(--rule)" strokeWidth="1.5" markerEnd="url(#arrowGTM)" />

                {/* Gov/CMS — upper left (300°) */}
                <rect x="17" y="64" width="60" height="28" rx="2" fill="var(--foreground)" fillOpacity="0.04" stroke="var(--rule)" strokeWidth="1" />
                <text x="47" y="82" fontSize="9" fontFamily="var(--font-dm-sans), sans-serif" fontWeight="600" fill="var(--body)" textAnchor="middle">Gov/CMS</text>
                <line x1="99" y1="108" x2="74" y2="94" stroke="var(--rule)" strokeWidth="1.5" markerEnd="url(#arrowGTM)" />

                <defs>
                  <marker id="arrowGTM" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto">
                    <path d="M0 0L7 2.5L0 5" fill="var(--rule)" />
                  </marker>
                </defs>
              </svg>
            </div>
          </div>

        </div>
      </section>

      <hr className="rule max-w-[1080px] mx-auto" />

      {/* Experience Summary */}
      <section className="max-w-[1080px] mx-auto px-4 sm:px-8 py-10 sm:py-14">
        <div className="section-label mb-8">Experience</div>
        <div className="space-y-0">
          {experience.map((job) => (
            <div
              key={job.company}
              className="relative pl-6 pb-6 border-l border-rule last:pb-0"
            >
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent border-2 border-background" />
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-3 mb-0.5">
                <h3 className="font-sans text-sm font-bold text-foreground">
                  {job.company}
                </h3>
                {job.exit && (
                  <span className="font-sans text-[0.625rem] font-semibold uppercase tracking-[0.08em] text-teal bg-teal/8 px-2 py-0.5 rounded-sm w-fit">
                    {job.exit}
                  </span>
                )}
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2 mb-1">
                <p className="font-subhead italic text-body text-xs">
                  {job.role}
                </p>
                <span className="font-sans text-[0.6875rem] text-muted">
                  {job.period}
                </span>
              </div>
              <p className="font-serif text-[0.8125rem] text-body leading-relaxed">
                {job.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/experience"
            className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold uppercase tracking-[0.1em] text-teal hover:text-teal-hover transition-colors"
          >
            View Full Experience
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      <hr className="rule max-w-[1080px] mx-auto" />

      {/* Projects */}
      <section className="max-w-[1080px] mx-auto px-4 sm:px-8 py-10 sm:py-14">
        <div className="section-label mb-8">Current AI Projects</div>
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
    </>
  );
}
