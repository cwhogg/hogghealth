import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience — Chris Hogg | HoggHealth Consulting",
  description:
    "Career history, patents, and education for Chris Hogg — healthcare founder, operator, and AI builder.",
};

const experience = [
  {
    company: "HoggHealth Consulting",
    roles: [
      {
        title: "Fractional Product & GTM Leader",
        dates: "Jan 2025 – Present",
      },
    ],
    location: "San Francisco Bay Area",
    description:
      "Focused on pharma-funded DTP programs for patients with complex and rare diseases. Brokering partnerships between pharmaceutical manufacturers (Lilly, Eisai, Biogen, UCB) and virtual care providers (Synapticure, Heartbeat Health, LiverRight, AmplifyMD) to increase patient access to specialty and subspecialty care. Building AI-powered healthcare tools independently.",
  },
  {
    company: "Marley Medical",
    roles: [
      {
        title: "Co-founder & CEO",
        dates: "Aug 2021 – Dec 2024",
      },
    ],
    location: "California",
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
    location: "San Francisco Bay Area",
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

const education = [
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

const patents = [
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
