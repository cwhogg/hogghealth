export type Role = {
  title: string;
  dates: string;
};

export type Job = {
  company: string;
  roles: Role[];
  location: string;
  exit?: string;
  description: string;
  bullets?: string[];
};

export const experience: Job[] = [
  {
    company: "HoggHealth Consulting",
    roles: [
      {
        title: "Fractional Product & GTM Leader",
        dates: "2024 – Present",
      },
    ],
    location: "San Francisco Bay Area",
    description:
      "Focused on designing and implementing Brand-led DTP programs for patients with complex and rare diseases, or with more common conditions such as insomnia or obesity. Brokering partnerships between pharmaceutical manufacturers (Lilly, Eisai, Biogen, UCB) and virtual care providers (Synapticure, Heartbeat Health, LiverRight, AmplifyMD) to increase patient access to specialty and subspecialty care. Leading product, implementation and delivery for the Zebra DTP Platform. Building AI-powered healthcare tools in my spare time.",
  },
  {
    company: "ZS Associates",
    roles: [
      {
        title: "Zebra DTP Platform — Partnerships, Product and Delivery",
        dates: "2025 – Present",
      },
    ],
    location: "San Francisco Bay Area",
    description:
      "Leading the design, development and implementation of the Zebra DTP Platform,  programs and partnership network. Zebra is an end-to-end Direct-to-Patient Platform that enables seamless patient journeys from Awareness to Activation to Care Delivery to Fulfillment. Working on multiple live and in-process programs in rare disease, insomnia, CV diseases and obesity. Built partnership network of virtual specialty care providers, referral management, performance marketing, fulfillment, BV/Price.",
  },
  {
    company: "Synapticure (Virtual Neurology Specialty Clinic)",
    roles: [
      {
        title: "Fractional Commercial Lead",
        dates: "2024 – 2025",
      },
    ],
    location: "Chicago, IL",
    description:
      "Developed and implemented new life science commercial strategy and executed GTM. Negotiated, signed, and implemented partnerships with:",
    bullets: [
      "LillyDirect for Direct-to-Patient program in Alzheimer's Disease + data project leading to publication",
      "Eisai for Direct-to-Patient program in Alzheimer's Disease",
      "Biogen for Direct-to-Patient program in Ataxia",
    ],
  },
  {
    company: "Marley Medical (Virtual Cardiometabolic Clinic)",
    roles: [
      {
        title: "Co-founder & CEO",
        dates: "Aug 2021 – Dec 2024",
      },
    ],
    location: "Fully Remote Team",
    exit: "Sold to Starlight",
    description:
      "Connected health and data-driven approach to managing chronic disease. Built a virtual-first primary care clinic focused on people with common chronic conditions, using remote monitoring and proactive interventions to keep patients healthier between visits. Funded by a16z, CRV, and Rock Health. Led the company from founding through sale to Starlight Health.",
  },
  {
    company: "Propeller Health",
    roles: [
      {
        title: "Chief Commercial Officer",
        dates: "Jan 2018 – Jun 2020",
      },
      {
        title: "Chief Operating Officer & Head of Product",
        dates: "Jul 2014 – Jan 2018",
      },
    ],
    location: "Madison, WI",
    exit: "Acquired by ResMed",
    description:
      "Joined as COO and Head of Product to lead the San Francisco office, building out data science, design, product, and implementation for a digital therapeutic platform for asthma and COPD. Shifted to CCO to focus on the company's most critical problems — commercial strategy, pharmaceutical and medtech partnerships, payer and health system sales, clinical/medical affairs, and data analytics. Named inventor on 7 patents in respiratory disease monitoring and health data systems. Grew the company from early-stage to acquisition by ResMed.",
  },
  {
    company: "Practice Fusion",
    roles: [
      {
        title: "Head of Data Science & Data Products",
        dates: "Feb 2013 – Aug 2014",
      },
    ],
    location: "San Francisco Bay Area",
    exit: "Acquired by Allscripts",
    description:
      "Created the data science group to transform EHR data from 100,000+ physicians into actionable insight. Built data-driven products for consumers and clinicians, turning a massive repository of clinical data into a strategic asset.",
  },
  {
    company: "100Plus",
    roles: [
      {
        title: "Co-founder & CEO",
        dates: "Oct 2011 – Feb 2013",
      },
    ],
    location: "San Francisco Bay Area",
    exit: "Acquired by Practice Fusion",
    description:
      "An early longevity company using data, design, and location-based technology to engage users with day-to-day health decisions. Built predictive models of future health risk from consumer activity data. Funded by Founders Fund, Greylock Partners, Felicis Ventures, and Band of Angels Acorn Fund.",
  },
  {
    company: "Gilead Sciences",
    roles: [
      {
        title: "Cardiovascular Area Lead — Commercial Strategy",
        dates: "Mar 2009 – Oct 2011",
      },
    ],
    location: "Foster City, CA",
    description:
      "Project Team Leader for Ranexa (ranolazine), responsible for life cycle management, long-term positioning, and ongoing clinical development strategy. Worked with R&D and clinical teams to develop cardiovascular therapeutic area strategy, clinical trial design, and clinical strategy. Provided commercial assessments and analysis of strategic fit for in-licensing and M&A opportunities. Bridged clinical and commercial organizations to align product development, commercialization, and marketing efforts.",
  },
  {
    company: "CV Therapeutics",
    roles: [
      {
        title: "Strategic Market Planning & Analytics",
        dates: "2006 – 2009",
      },
    ],
    location: "Palo Alto, CA",
    exit: "Acquired by Gilead Sciences",
    description:
      "Strategic marketing, business development, clinical development, portfolio analysis, and analysis of clinical data for a cardiovascular therapeutics company. Acquired by Gilead Sciences in March 2009.",
  },
  {
    company: "UBS Investment Bank",
    roles: [
      {
        title: "Associate Director, Healthcare",
        dates: "2003 – 2006",
      },
    ],
    location: "New York, NY",
    description:
      "Executed over 20 transactions in biotechnology, pharmaceuticals, specialty pharmaceuticals, medical technology, managed care, and healthcare services. Transactions included in-licensing/out-licensing, M&A, initial public offerings, secondary equity offerings, private placements, convertible bond offerings, debt offerings, and LBO financings.",
  },
  {
    company: "Strata Biosciences",
    roles: [
      {
        title: "Molecular Biology Research Associate",
        dates: "1998 – 2001",
      },
    ],
    location: "San Francisco Bay Area",
    description:
      "Molecular and cell biology work for a functional genomics startup using ribozymes to knock out individual gene function.",
  },
];

export type Education = {
  school: string;
  degree: string;
  field: string;
  dates: string;
  note?: string;
};

export const education: Education[] = [
  {
    school: "The University of Chicago Booth School of Business",
    degree: "MBA with Honors",
    field: "Strategy, Entrepreneurship, Finance",
    dates: "2001 – 2003",
  },
  {
    school: "Brown University",
    degree: "Bachelor of Science",
    field: "Biology",
    dates: "1993 – 1997",
    note: "Sigma Xi Scientific Honors Society",
  },
];

export type Patent = {
  title: string;
  number: string;
  date: string;
};

export const patents: Patent[] = [
  {
    title: "Evaluation of respiratory disease risk in a geographic region based on medicament device monitoring",
    number: "US20190272925A1",
    date: "Issued Oct 21, 2023",
  },
  {
    title: "Identification of asthma triggering conditions based on medicament device monitoring for a patient",
    number: "US20200058403A1",
    date: "Issued Sep 27, 2022",
  },
  {
    title: "Dynamic graphical user interface for interaction with patient respiratory disease data",
    number: "US11342057B2",
    date: "Issued May 24, 2022",
  },
  {
    title: "Pre-emptive asthma risk notifications based on medicament device monitoring",
    number: "US20190102522A1",
    date: "Issued Dec 7, 2021",
  },
  {
    title: "Predictive modeling of respiratory disease risk and events",
    number: "US20200321127A1",
    date: "Issued Jun 17, 2020",
  },
  {
    title: "Real time adaptive controller medication dosing",
    number: "US10643742B2",
    date: "Issued May 5, 2020",
  },
  {
    title: "Integrated health data analysis system",
    number: "US20160267223A1",
    date: "Filed Mar 10, 2015",
  },
];

export type Publication = {
  title: string;
  authors: string;
  journal: string;
  year: string;
  doi: string;
  pmid: string;
  url: string;
};

export const publications: Publication[] = [
  {
    title:
      "Identifying impacts of air pollution on subacute asthma symptoms using digital medication sensors",
    authors: "Su JG, Barrett MA, Combs V, et al.",
    journal: "International Journal of Epidemiology",
    year: "2022",
    doi: "10.1093/ije/dyab187",
    pmid: "34664072",
    url: "https://pubmed.ncbi.nlm.nih.gov/34664072/",
  },
  {
    title:
      "Feasibility of Deploying Inhaler Sensors to Identify the Impacts of Environmental Triggers and Built Environment Factors on Asthma Short-Acting Bronchodilator Use",
    authors: "Su JG, Barrett MA, Henderson K, et al.",
    journal: "Environmental Health Perspectives",
    year: "2017",
    doi: "10.1289/EHP266",
    pmid: "27340894",
    url: "https://pubmed.ncbi.nlm.nih.gov/27340894/",
  },
];

export type Project = {
  category: string;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  url: string;
  date: string;
};

export const projects: Project[] = [
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
    url: "https://secondlookdx.com/",
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

export const bio = {
  name: "Chris Hogg",
  tagline: "Healthcare founder, operator, product, partnerships and data geek, now building  with AI",
  location: "San Francisco Bay Area",
  email: "cwhogg@gmail.com",
  linkedin: "linkedin.com/in/cwhogg",
  x: "x.com/cwhogg",
  summary:
    "Founder and operator in digital health and virtual care since 2011, and pharma commercial strategy analyst before that. Made chronic disease management data-driven and proactive at Marley Medical. Helped scale Propeller Health as COO, CCO and head of product through its acquisition by ResMed. Founded 100Plus, an early longevity company, in 2011 and sold to Practice Fusion. Now applying AI to unlock health data, accelerate rare disease diagnosis, and reimagine clinical research and patient journeys. Advises growth-stage companies on data strategy, product, and go-to-market. Currently focused on pharma-funded DTP solutions that connect manufacturers and virtual care providers to increase patient access to specialty and subspecialty care.",
};
