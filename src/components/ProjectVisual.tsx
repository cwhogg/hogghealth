export function ProjectVisual({ name }: { name: string }) {
  switch (name) {
    case "Open Health Data Hub":
      return <OpenHealthDataHubVisual />;
    case "Second Look":
      return <SecondLookVisual />;
    case "N of One":
      return <NOfOneVisual />;
    case "Synthetic Patients for Research":
      return <SyntheticPatientsVisual />;
    case "RedditRx":
      return <RedditRxVisual />;
    case "Will Pharma Like Me?":
      return <WillPharmaVisual />;
    case "What is that Disease?":
      return <WhatIsThatDiseaseVisual />;
    default:
      return null;
  }
}

/* ---------- individual visuals ---------- */

function OpenHealthDataHubVisual() {
  return (
    <svg viewBox="0 0 320 210" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Search bar */}
      <rect x="20" y="20" width="170" height="28" rx="2" stroke="var(--rule)" strokeWidth="1.5" fill="var(--surface)" />
      <text x="30" y="38" fontSize="8" fontFamily="var(--font-dm-sans), sans-serif" fill="var(--muted)">
        Which states have highest diabetes?
      </text>
      <circle cx="178" cy="34" r="8" fill="var(--accent)" />
      <path d="M175 34l2.5 2.5L181 32" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* Arrow */}
      <line x1="108" y1="52" x2="108" y2="68" stroke="var(--rule)" strokeWidth="1.5" markerEnd="url(#arrowOH)" />

      {/* AI → SQL badge */}
      <rect x="68" y="72" width="80" height="24" rx="2" fill="var(--teal)" opacity="0.12" stroke="var(--teal)" strokeWidth="1" />
      <text x="83" y="88" fontSize="10" fontFamily="var(--font-dm-sans), sans-serif" fontWeight="600" fill="var(--teal)">
        AI → SQL
      </text>

      {/* Arrow */}
      <line x1="108" y1="100" x2="108" y2="116" stroke="var(--rule)" strokeWidth="1.5" markerEnd="url(#arrowOH)" />

      {/* Bar chart */}
      <rect x="40" y="145" width="24" height="35" rx="1" fill="var(--accent)" opacity="0.7" />
      <rect x="72" y="135" width="24" height="45" rx="1" fill="var(--accent)" opacity="0.85" />
      <rect x="104" y="150" width="24" height="30" rx="1" fill="var(--accent)" opacity="0.6" />
      <rect x="136" y="140" width="24" height="40" rx="1" fill="var(--accent)" opacity="0.75" />
      <text x="46" y="192" fontSize="7" fontFamily="var(--font-dm-sans), sans-serif" fill="var(--muted)">TX</text>
      <text x="78" y="192" fontSize="7" fontFamily="var(--font-dm-sans), sans-serif" fill="var(--muted)">MS</text>
      <text x="109" y="192" fontSize="7" fontFamily="var(--font-dm-sans), sans-serif" fill="var(--muted)">WV</text>
      <text x="142" y="192" fontSize="7" fontFamily="var(--font-dm-sans), sans-serif" fill="var(--muted)">AL</text>
      {/* Axis */}
      <line x1="36" y1="120" x2="36" y2="182" stroke="var(--rule)" strokeWidth="1" />
      <line x1="36" y1="182" x2="168" y2="182" stroke="var(--rule)" strokeWidth="1" />

      {/* Label */}
      <text x="210" y="40" fontSize="8" fontFamily="var(--font-dm-sans), sans-serif" fill="var(--muted)" fontStyle="italic">
        Ask in English
      </text>
      <text x="210" y="86" fontSize="8" fontFamily="var(--font-dm-sans), sans-serif" fill="var(--muted)" fontStyle="italic">
        AI translates
      </text>
      <text x="210" y="150" fontSize="8" fontFamily="var(--font-dm-sans), sans-serif" fill="var(--muted)" fontStyle="italic">
        Get insights
      </text>

      {/* Dotted connector lines */}
      <line x1="195" y1="38" x2="208" y2="38" stroke="var(--rule)" strokeWidth="1" strokeDasharray="3 2" />
      <line x1="195" y1="84" x2="208" y2="84" stroke="var(--rule)" strokeWidth="1" strokeDasharray="3 2" />
      <line x1="195" y1="148" x2="208" y2="148" stroke="var(--rule)" strokeWidth="1" strokeDasharray="3 2" />

      <defs>
        <marker id="arrowOH" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0 0L8 3L0 6" fill="var(--rule)" />
        </marker>
      </defs>
    </svg>
  );
}

function SecondLookVisual() {
  const font = 'var(--font-dm-sans), sans-serif';

  /* Table layout constants */
  const tableTop = 190;
  const colX = [20, 148, 198, 248, 298, 348];
  const rowH = 24;
  const headerY = tableTop + 30;
  const tableW = 370;

  const rows = [
    { system: "SecondLook", n: "142", t1: "35.2%", t3: "51.4%", t5: "55.6%", t10: "55.6%", highlight: true },
    { system: "Exomiser *", n: "5,213", t1: "35.5%", t3: "46.3%", t5: "—", t10: "58.5%", highlight: false },
    { system: "o1-preview", n: "5,213", t1: "23.6%", t3: "31.2%", t5: "—", t10: "36.8%", highlight: false },
    { system: "GPT-4o", n: "5,213", t1: "~20%", t3: "~27%", t5: "—", t10: "~31%", highlight: false },
  ];

  return (
    <svg viewBox="0 0 390 430" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* ─── Pipeline schematic ─── */}

      {/* Symptom list box */}
      <rect x="15" y="30" width="90" height="120" rx="2" stroke="var(--rule)" strokeWidth="1.5" fill="var(--surface)" />
      <text x="30" y="48" fontSize="9" fontFamily={font} fontWeight="600" fill="var(--foreground)">Symptoms</text>
      <line x1="23" y1="54" x2="97" y2="54" stroke="var(--rule-light)" strokeWidth="1" />
      <circle cx="29" cy="68" r="2.5" fill="var(--accent)" opacity="0.6" />
      <text x="37" y="71" fontSize="8" fontFamily={font} fill="var(--body)">Ptosis</text>
      <circle cx="29" cy="84" r="2.5" fill="var(--accent)" opacity="0.6" />
      <text x="37" y="87" fontSize="8" fontFamily={font} fill="var(--body)">Diplopia</text>
      <circle cx="29" cy="100" r="2.5" fill="var(--accent)" opacity="0.6" />
      <text x="37" y="103" fontSize="8" fontFamily={font} fill="var(--body)">Dysphagia</text>
      <circle cx="29" cy="116" r="2.5" fill="var(--accent)" opacity="0.6" />
      <text x="37" y="119" fontSize="8" fontFamily={font} fill="var(--body)">Limb weakness</text>
      <circle cx="29" cy="132" r="2.5" fill="var(--accent)" opacity="0.6" />
      <text x="37" y="135" fontSize="8" fontFamily={font} fill="var(--body)">Fatigue</text>

      {/* Arrow */}
      <line x1="109" y1="90" x2="134" y2="90" stroke="var(--rule)" strokeWidth="1.5" markerEnd="url(#arrowSL)" />

      {/* Specialist Agents node */}
      <rect x="138" y="40" width="80" height="100" rx="2" stroke="var(--teal)" strokeWidth="1.5" fill="var(--teal)" fillOpacity="0.06" />
      <text x="145" y="58" fontSize="8" fontFamily={font} fontWeight="600" fill="var(--teal)">Specialist Agents</text>
      <rect x="150" y="66" width="56" height="16" rx="2" fill="var(--teal)" fillOpacity="0.15" stroke="var(--teal)" strokeWidth="0.75" />
      <text x="155" y="77" fontSize="7" fontFamily={font} fill="var(--teal)">Specialist 1</text>
      <rect x="150" y="86" width="56" height="16" rx="2" fill="var(--teal)" fillOpacity="0.15" stroke="var(--teal)" strokeWidth="0.75" />
      <text x="155" y="97" fontSize="7" fontFamily={font} fill="var(--teal)">Specialist 2</text>
      <rect x="150" y="106" width="56" height="16" rx="2" fill="var(--teal)" fillOpacity="0.15" stroke="var(--teal)" strokeWidth="0.75" />
      <text x="155" y="117" fontSize="7" fontFamily={font} fill="var(--teal)">Specialist 3</text>

      {/* Arrow */}
      <line x1="222" y1="90" x2="247" y2="90" stroke="var(--rule)" strokeWidth="1.5" markerEnd="url(#arrowSL)" />

      {/* Diagnosis list */}
      <rect x="251" y="30" width="125" height="120" rx="2" stroke="var(--rule)" strokeWidth="1.5" fill="var(--surface)" />
      <text x="262" y="48" fontSize="9" fontFamily={font} fontWeight="600" fill="var(--foreground)">Diagnoses</text>
      <line x1="259" y1="54" x2="368" y2="54" stroke="var(--rule-light)" strokeWidth="1" />
      <text x="261" y="72" fontSize="9" fontFamily={font} fontWeight="700" fill="var(--accent)">1.</text>
      <text x="275" y="72" fontSize="8" fontFamily={font} fill="var(--body)">Myasthenia Gravis</text>
      <text x="261" y="90" fontSize="9" fontFamily={font} fontWeight="700" fill="var(--accent)">2.</text>
      <text x="275" y="90" fontSize="8" fontFamily={font} fill="var(--body)">Lambert-Eaton</text>
      <text x="261" y="108" fontSize="9" fontFamily={font} fontWeight="700" fill="var(--accent)">3.</text>
      <text x="275" y="108" fontSize="8" fontFamily={font} fill="var(--body)">Botulism</text>
      <text x="261" y="126" fontSize="9" fontFamily={font} fontWeight="700" fill="var(--muted)">4.</text>
      <text x="275" y="126" fontSize="8" fontFamily={font} fill="var(--muted)">Muscular Dystrophy</text>
      <text x="261" y="144" fontSize="9" fontFamily={font} fontWeight="700" fill="var(--muted)">5.</text>
      <text x="275" y="144" fontSize="8" fontFamily={font} fill="var(--muted)">Motor Neuron Disease</text>

      {/* ─── Divider ─── */}
      <line x1="20" y1="170" x2="370" y2="170" stroke="var(--rule-light)" strokeWidth="1" />

      {/* ─── Benchmark table ─── */}

      {/* Table title */}
      <text x={tableW / 2 + 10} y={tableTop + 4} fontSize="10" fontFamily={font} fontWeight="700" fill="var(--foreground)" textAnchor="middle">
        Phenopacket2Prompt Benchmark
      </text>
      <text x={tableW / 2 + 10} y={tableTop + 18} fontSize="7.5" fontFamily={font} fill="var(--muted)" textAnchor="middle">
        Correct rare disease diagnosis in top-K results
      </text>

      {/* Table header background */}
      <rect x={colX[0]} y={headerY - 14} width={tableW - 20} height={rowH} rx="2" fill="var(--foreground)" fillOpacity="0.06" />

      {/* Header labels */}
      <text x={colX[0] + 8} y={headerY} fontSize="7.5" fontFamily={font} fontWeight="700" fill="var(--foreground)">System</text>
      <text x={colX[1] + 20} y={headerY} fontSize="7.5" fontFamily={font} fontWeight="700" fill="var(--foreground)" textAnchor="middle">N</text>
      <text x={colX[2] + 20} y={headerY} fontSize="7.5" fontFamily={font} fontWeight="700" fill="var(--foreground)" textAnchor="middle">Top-1</text>
      <text x={colX[3] + 20} y={headerY} fontSize="7.5" fontFamily={font} fontWeight="700" fill="var(--foreground)" textAnchor="middle">Top-3</text>
      <text x={colX[4] + 20} y={headerY} fontSize="7.5" fontFamily={font} fontWeight="700" fill="var(--foreground)" textAnchor="middle">Top-5</text>
      <text x={colX[5] + 5} y={headerY} fontSize="7.5" fontFamily={font} fontWeight="700" fill="var(--foreground)" textAnchor="middle">Top-10</text>

      {/* Header divider */}
      <line x1={colX[0]} y1={headerY + 10} x2={colX[0] + tableW - 20} y2={headerY + 10} stroke="var(--rule)" strokeWidth="1" />

      {/* Data rows */}
      {rows.map((row, i) => {
        const y = headerY + 10 + (i + 1) * rowH;
        const textColor = row.highlight ? "var(--teal)" : "var(--body)";
        const weight = row.highlight ? "700" : "400";
        return (
          <g key={row.system}>
            {row.highlight && (
              <rect x={colX[0]} y={y - 15} width={tableW - 20} height={rowH} rx="2" fill="var(--teal)" fillOpacity="0.06" />
            )}
            <text x={colX[0] + 8} y={y} fontSize="8" fontFamily={font} fontWeight={weight} fill={textColor}>{row.system}</text>
            <text x={colX[1] + 20} y={y} fontSize="8" fontFamily={font} fontWeight={weight} fill={textColor} textAnchor="middle">{row.n}</text>
            <text x={colX[2] + 20} y={y} fontSize="8" fontFamily={font} fontWeight={weight} fill={textColor} textAnchor="middle">{row.t1}</text>
            <text x={colX[3] + 20} y={y} fontSize="8" fontFamily={font} fontWeight={weight} fill={textColor} textAnchor="middle">{row.t3}</text>
            <text x={colX[4] + 20} y={y} fontSize="8" fontFamily={font} fontWeight={weight} fill={textColor} textAnchor="middle">{row.t5}</text>
            <text x={colX[5] + 5} y={y} fontSize="8" fontFamily={font} fontWeight={weight} fill={textColor} textAnchor="middle">{row.t10}</text>
            {i < rows.length - 1 && (
              <line x1={colX[0]} y1={y + 9} x2={colX[0] + tableW - 20} y2={y + 9} stroke="var(--rule-light)" strokeWidth="0.75" />
            )}
          </g>
        );
      })}

      {/* Footnote */}
      <text x={colX[0] + 8} y="400" fontSize="7" fontFamily={font} fill="var(--muted)" fontStyle="italic">
        * Exomiser has access to patient genetic data; SecondLook does not.
      </text>
      <text x={colX[0] + 8} y="413" fontSize="6.5" fontFamily={font} fill="var(--muted)">
        Source: Phenopacket2Prompt — Zenodo DOI: 10.5281/zenodo.15065293
      </text>

      <defs>
        <marker id="arrowSL" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0 0L8 3L0 6" fill="var(--rule)" />
        </marker>
      </defs>
    </svg>
  );
}

function NOfOneVisual() {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Horizontal track line */}
      <line x1="40" y1="100" x2="280" y2="100" stroke="var(--rule)" strokeWidth="2" />

      {/* Step 1: Design */}
      <circle cx="60" cy="100" r="18" fill="var(--accent)" fillOpacity="0.1" stroke="var(--accent)" strokeWidth="1.5" />
      <text x="60" y="104" fontSize="8" fontFamily="var(--font-dm-sans), sans-serif" fontWeight="600" fill="var(--accent)" textAnchor="middle">1</text>
      <text x="60" y="132" fontSize="9" fontFamily="var(--font-dm-sans), sans-serif" fontWeight="600" fill="var(--foreground)" textAnchor="middle">Design</text>
      <text x="60" y="144" fontSize="7" fontFamily="var(--font-dm-sans), sans-serif" fill="var(--muted)" textAnchor="middle">Protocol</text>

      {/* Arrow connector */}
      <path d="M82 100L98 100" stroke="var(--teal)" strokeWidth="1.5" markerEnd="url(#arrowNO)" />

      {/* Step 2: Enroll */}
      <circle cx="120" cy="100" r="18" fill="var(--teal)" fillOpacity="0.1" stroke="var(--teal)" strokeWidth="1.5" />
      <text x="120" y="104" fontSize="8" fontFamily="var(--font-dm-sans), sans-serif" fontWeight="600" fill="var(--teal)" textAnchor="middle">2</text>
      <text x="120" y="132" fontSize="9" fontFamily="var(--font-dm-sans), sans-serif" fontWeight="600" fill="var(--foreground)" textAnchor="middle">Enroll</text>
      <text x="120" y="144" fontSize="7" fontFamily="var(--font-dm-sans), sans-serif" fill="var(--muted)" textAnchor="middle">Participants</text>

      {/* Arrow connector */}
      <path d="M142 100L158 100" stroke="var(--teal)" strokeWidth="1.5" markerEnd="url(#arrowNO)" />

      {/* Step 3: Collect */}
      <circle cx="180" cy="100" r="18" fill="var(--teal)" fillOpacity="0.1" stroke="var(--teal)" strokeWidth="1.5" />
      <text x="180" y="104" fontSize="8" fontFamily="var(--font-dm-sans), sans-serif" fontWeight="600" fill="var(--teal)" textAnchor="middle">3</text>
      <text x="180" y="132" fontSize="9" fontFamily="var(--font-dm-sans), sans-serif" fontWeight="600" fill="var(--foreground)" textAnchor="middle">Collect</text>
      <text x="180" y="144" fontSize="7" fontFamily="var(--font-dm-sans), sans-serif" fill="var(--muted)" textAnchor="middle">PRO Data</text>

      {/* Arrow connector */}
      <path d="M202 100L218 100" stroke="var(--teal)" strokeWidth="1.5" markerEnd="url(#arrowNO)" />

      {/* Step 4: Analyze */}
      <circle cx="240" cy="100" r="18" fill="var(--accent)" fillOpacity="0.1" stroke="var(--accent)" strokeWidth="1.5" />
      <text x="240" y="104" fontSize="8" fontFamily="var(--font-dm-sans), sans-serif" fontWeight="600" fill="var(--accent)" textAnchor="middle">4</text>
      <text x="240" y="132" fontSize="9" fontFamily="var(--font-dm-sans), sans-serif" fontWeight="600" fill="var(--foreground)" textAnchor="middle">Analyze</text>
      <text x="240" y="144" fontSize="7" fontFamily="var(--font-dm-sans), sans-serif" fill="var(--muted)" textAnchor="middle">Results</text>

      {/* Title */}
      <text x="160" y="54" fontSize="9" fontFamily="var(--font-dm-sans), sans-serif" fontWeight="600" fill="var(--muted)" textAnchor="middle" letterSpacing="0.1em">
        STUDY LIFECYCLE
      </text>

      <defs>
        <marker id="arrowNO" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0 0L8 3L0 6" fill="var(--teal)" />
        </marker>
      </defs>
    </svg>
  );
}

function SyntheticPatientsVisual() {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Chat container */}
      <rect x="60" y="16" width="200" height="172" rx="3" stroke="var(--rule)" strokeWidth="1.5" fill="var(--surface)" />

      {/* Patient header bar */}
      <rect x="60" y="16" width="200" height="32" rx="3" fill="var(--teal)" fillOpacity="0.08" />
      <rect x="60" y="45" width="200" height="3" rx="0" fill="none" />
      {/* Avatar circle */}
      <circle cx="82" cy="32" r="10" fill="var(--teal)" fillOpacity="0.2" stroke="var(--teal)" strokeWidth="1" />
      <text x="82" y="36" fontSize="10" fontFamily="var(--font-dm-sans), sans-serif" fill="var(--teal)" textAnchor="middle">P</text>
      <text x="98" y="30" fontSize="8" fontFamily="var(--font-dm-sans), sans-serif" fontWeight="600" fill="var(--foreground)">Sarah, 34</text>
      <text x="98" y="40" fontSize="7" fontFamily="var(--font-dm-sans), sans-serif" fill="var(--muted)">Myasthenia Gravis</text>

      <line x1="68" y1="48" x2="252" y2="48" stroke="var(--rule-light)" strokeWidth="1" />

      {/* User message (right-aligned) */}
      <rect x="140" y="58" width="110" height="30" rx="3" fill="var(--accent)" fillOpacity="0.08" stroke="var(--accent)" strokeWidth="0.75" />
      <text x="150" y="72" fontSize="7.5" fontFamily="var(--font-dm-sans), sans-serif" fill="var(--body)">What treatments have</text>
      <text x="150" y="82" fontSize="7.5" fontFamily="var(--font-dm-sans), sans-serif" fill="var(--body)">you tried?</text>

      {/* Patient response (left-aligned) */}
      <rect x="70" y="96" width="140" height="42" rx="3" fill="var(--teal)" fillOpacity="0.06" stroke="var(--teal)" strokeWidth="0.75" />
      <text x="80" y="110" fontSize="7.5" fontFamily="var(--font-dm-sans), sans-serif" fill="var(--body)">I started with pyridostigmine</text>
      <text x="80" y="121" fontSize="7.5" fontFamily="var(--font-dm-sans), sans-serif" fill="var(--body)">and later added azathioprine.</text>
      <text x="80" y="132" fontSize="7.5" fontFamily="var(--font-dm-sans), sans-serif" fill="var(--body)">IVIG helped during flares.</text>

      {/* User message 2 */}
      <rect x="155" y="146" width="95" height="22" rx="3" fill="var(--accent)" fillOpacity="0.08" stroke="var(--accent)" strokeWidth="0.75" />
      <text x="165" y="160" fontSize="7.5" fontFamily="var(--font-dm-sans), sans-serif" fill="var(--body)">How is your daily life?</text>

      {/* Typing indicator */}
      <circle cx="82" cy="178" r="2" fill="var(--teal)" opacity="0.4" />
      <circle cx="90" cy="178" r="2" fill="var(--teal)" opacity="0.6" />
      <circle cx="98" cy="178" r="2" fill="var(--teal)" opacity="0.8" />
    </svg>
  );
}

function RedditRxVisual() {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Reddit post snippets (left) */}
      <rect x="10" y="30" width="100" height="26" rx="2" stroke="var(--rule)" strokeWidth="1" fill="var(--surface)" />
      <text x="17" y="41" fontSize="6.5" fontFamily="var(--font-dm-sans), sans-serif" fontWeight="600" fill="var(--foreground)">r/migraine</text>
      <text x="17" y="51" fontSize="5.5" fontFamily="var(--font-dm-sans), sans-serif" fill="var(--muted)">Magnesium changed my life...</text>

      <rect x="10" y="62" width="100" height="26" rx="2" stroke="var(--rule)" strokeWidth="1" fill="var(--surface)" />
      <text x="17" y="73" fontSize="6.5" fontFamily="var(--font-dm-sans), sans-serif" fontWeight="600" fill="var(--foreground)">r/migraine</text>
      <text x="17" y="83" fontSize="5.5" fontFamily="var(--font-dm-sans), sans-serif" fill="var(--muted)">Tried Aimovig for 6 months...</text>

      <rect x="10" y="94" width="100" height="26" rx="2" stroke="var(--rule)" strokeWidth="1" fill="var(--surface)" />
      <text x="17" y="105" fontSize="6.5" fontFamily="var(--font-dm-sans), sans-serif" fontWeight="600" fill="var(--foreground)">r/ChronicPain</text>
      <text x="17" y="115" fontSize="5.5" fontFamily="var(--font-dm-sans), sans-serif" fill="var(--muted)">Botox injections worked...</text>

      <rect x="10" y="126" width="100" height="26" rx="2" stroke="var(--rule)" strokeWidth="1" fill="var(--surface)" />
      <text x="17" y="137" fontSize="6.5" fontFamily="var(--font-dm-sans), sans-serif" fontWeight="600" fill="var(--foreground)">r/migraine</text>
      <text x="17" y="147" fontSize="5.5" fontFamily="var(--font-dm-sans), sans-serif" fill="var(--muted)">Riboflavin + CoQ10 combo...</text>

      {/* Arrow into funnel */}
      <line x1="114" y1="95" x2="130" y2="95" stroke="var(--rule)" strokeWidth="1.5" markerEnd="url(#arrowRR)" />

      {/* Analysis funnel */}
      <path d="M134 50 L170 50 L162 95 L158 140 L146 140 L142 95 Z" fill="var(--teal)" fillOpacity="0.08" stroke="var(--teal)" strokeWidth="1.5" />
      <text x="152" y="75" fontSize="7" fontFamily="var(--font-dm-sans), sans-serif" fontWeight="600" fill="var(--teal)" textAnchor="middle">AI</text>
      <text x="152" y="87" fontSize="6.5" fontFamily="var(--font-dm-sans), sans-serif" fill="var(--teal)" textAnchor="middle">Analysis</text>

      {/* Arrow out */}
      <line x1="166" y1="95" x2="182" y2="95" stroke="var(--rule)" strokeWidth="1.5" markerEnd="url(#arrowRR)" />

      {/* Horizontal bar chart (right) */}
      <text x="190" y="42" fontSize="7.5" fontFamily="var(--font-dm-sans), sans-serif" fontWeight="600" fill="var(--foreground)">Treatment Effectiveness</text>

      <text x="190" y="62" fontSize="7" fontFamily="var(--font-dm-sans), sans-serif" fill="var(--body)">Magnesium</text>
      <rect x="190" y="66" width="100" height="10" rx="1" fill="var(--accent)" fillOpacity="0.7" />
      <text x="294" y="75" fontSize="7" fontFamily="var(--font-dm-sans), sans-serif" fill="var(--muted)">78%</text>

      <text x="190" y="90" fontSize="7" fontFamily="var(--font-dm-sans), sans-serif" fill="var(--body)">Aimovig</text>
      <rect x="190" y="94" width="85" height="10" rx="1" fill="var(--accent)" fillOpacity="0.6" />
      <text x="279" y="103" fontSize="7" fontFamily="var(--font-dm-sans), sans-serif" fill="var(--muted)">66%</text>

      <text x="190" y="118" fontSize="7" fontFamily="var(--font-dm-sans), sans-serif" fill="var(--body)">Botox</text>
      <rect x="190" y="122" width="72" height="10" rx="1" fill="var(--accent)" fillOpacity="0.5" />
      <text x="266" y="131" fontSize="7" fontFamily="var(--font-dm-sans), sans-serif" fill="var(--muted)">56%</text>

      <text x="190" y="146" fontSize="7" fontFamily="var(--font-dm-sans), sans-serif" fill="var(--body)">Riboflavin</text>
      <rect x="190" y="150" width="58" height="10" rx="1" fill="var(--accent)" fillOpacity="0.4" />
      <text x="252" y="159" fontSize="7" fontFamily="var(--font-dm-sans), sans-serif" fill="var(--muted)">45%</text>

      <defs>
        <marker id="arrowRR" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0 0L8 3L0 6" fill="var(--rule)" />
        </marker>
      </defs>
    </svg>
  );
}

function WillPharmaVisual() {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Card background */}
      <rect x="30" y="20" width="260" height="160" rx="3" stroke="var(--rule)" strokeWidth="1.5" fill="var(--surface)" />

      {/* Title */}
      <text x="160" y="42" fontSize="10" fontFamily="var(--font-dm-sans), sans-serif" fontWeight="700" fill="var(--foreground)" textAnchor="middle">
        Partnership Scorecard
      </text>
      <line x1="50" y1="50" x2="270" y2="50" stroke="var(--rule-light)" strokeWidth="1" />

      {/* Market Fit */}
      <text x="50" y="72" fontSize="8" fontFamily="var(--font-dm-sans), sans-serif" fill="var(--body)">Market Fit</text>
      <rect x="130" y="63" width="110" height="12" rx="2" fill="var(--rule-light)" />
      <rect x="130" y="63" width="93.5" height="12" rx="2" fill="var(--teal)" fillOpacity="0.6" />
      <text x="248" y="73" fontSize="8" fontFamily="var(--font-dm-sans), sans-serif" fontWeight="600" fill="var(--teal)">85%</text>

      {/* Capabilities */}
      <text x="50" y="98" fontSize="8" fontFamily="var(--font-dm-sans), sans-serif" fill="var(--body)">Capabilities</text>
      <rect x="130" y="89" width="110" height="12" rx="2" fill="var(--rule-light)" />
      <rect x="130" y="89" width="79.2" height="12" rx="2" fill="var(--teal)" fillOpacity="0.5" />
      <text x="248" y="99" fontSize="8" fontFamily="var(--font-dm-sans), sans-serif" fontWeight="600" fill="var(--teal)">72%</text>

      {/* Scale */}
      <text x="50" y="124" fontSize="8" fontFamily="var(--font-dm-sans), sans-serif" fill="var(--body)">Scale</text>
      <rect x="130" y="115" width="110" height="12" rx="2" fill="var(--rule-light)" />
      <rect x="130" y="115" width="66" height="12" rx="2" fill="var(--accent)" fillOpacity="0.4" />
      <text x="248" y="125" fontSize="8" fontFamily="var(--font-dm-sans), sans-serif" fontWeight="600" fill="var(--accent)">60%</text>

      {/* Compliance */}
      <text x="50" y="150" fontSize="8" fontFamily="var(--font-dm-sans), sans-serif" fill="var(--body)">Compliance</text>
      <rect x="130" y="141" width="110" height="12" rx="2" fill="var(--rule-light)" />
      <rect x="130" y="141" width="99" height="12" rx="2" fill="var(--teal)" fillOpacity="0.7" />
      <text x="248" y="151" fontSize="8" fontFamily="var(--font-dm-sans), sans-serif" fontWeight="600" fill="var(--teal)">90%</text>

      {/* Overall grade badge */}
      <rect x="230" y="20" width="60" height="30" rx="2" fill="var(--teal)" fillOpacity="0.12" stroke="var(--teal)" strokeWidth="1" />
      <text x="260" y="32" fontSize="7" fontFamily="var(--font-dm-sans), sans-serif" fill="var(--teal)" textAnchor="middle">OVERALL</text>
      <text x="260" y="44" fontSize="12" fontFamily="var(--font-dm-sans), sans-serif" fontWeight="700" fill="var(--teal)" textAnchor="middle">B+</text>
    </svg>
  );
}

function WhatIsThatDiseaseVisual() {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Card outline */}
      <rect x="40" y="16" width="240" height="172" rx="3" stroke="var(--rule)" strokeWidth="1.5" fill="var(--surface)" />

      {/* Header with accent stripe */}
      <rect x="40" y="16" width="240" height="4" rx="3" fill="var(--accent)" fillOpacity="0.6" />

      {/* Disease name */}
      <text x="60" y="42" fontSize="13" fontFamily="var(--font-dm-sans), sans-serif" fontWeight="700" fill="var(--foreground)">
        Ehlers-Danlos Syndrome
      </text>

      {/* Prevalence stat */}
      <rect x="60" y="50" width="80" height="18" rx="2" fill="var(--teal)" fillOpacity="0.08" />
      <text x="68" y="63" fontSize="7.5" fontFamily="var(--font-dm-sans), sans-serif" fill="var(--teal)">
        Prevalence: 1 in 5,000
      </text>

      <line x1="60" y1="76" x2="260" y2="76" stroke="var(--rule-light)" strokeWidth="1" />

      {/* Symptoms section */}
      <text x="60" y="90" fontSize="8" fontFamily="var(--font-dm-sans), sans-serif" fontWeight="600" fill="var(--accent)" letterSpacing="0.08em">
        SYMPTOMS
      </text>
      <circle cx="66" cy="104" r="2" fill="var(--body)" opacity="0.4" />
      <text x="74" y="107" fontSize="7.5" fontFamily="var(--font-dm-sans), sans-serif" fill="var(--body)">Joint hypermobility</text>
      <circle cx="66" cy="118" r="2" fill="var(--body)" opacity="0.4" />
      <text x="74" y="121" fontSize="7.5" fontFamily="var(--font-dm-sans), sans-serif" fill="var(--body)">Skin hyperextensibility</text>
      <circle cx="66" cy="132" r="2" fill="var(--body)" opacity="0.4" />
      <text x="74" y="135" fontSize="7.5" fontFamily="var(--font-dm-sans), sans-serif" fill="var(--body)">Chronic pain and fatigue</text>

      <line x1="60" y1="144" x2="260" y2="144" stroke="var(--rule-light)" strokeWidth="1" />

      {/* Treatment section */}
      <text x="60" y="158" fontSize="8" fontFamily="var(--font-dm-sans), sans-serif" fontWeight="600" fill="var(--accent)" letterSpacing="0.08em">
        TREATMENT
      </text>
      <text x="60" y="172" fontSize="7" fontFamily="var(--font-dm-sans), sans-serif" fill="var(--body)">
        Physical therapy, pain management,
      </text>
      <text x="60" y="182" fontSize="7" fontFamily="var(--font-dm-sans), sans-serif" fill="var(--body)">
        genetic counseling
      </text>

      {/* Decorative: type badge */}
      <rect x="210" y="48" width="58" height="20" rx="2" fill="var(--accent)" fillOpacity="0.08" stroke="var(--accent)" strokeWidth="0.75" />
      <text x="218" y="62" fontSize="7" fontFamily="var(--font-dm-sans), sans-serif" fontWeight="600" fill="var(--accent)">Genetic</text>
    </svg>
  );
}
