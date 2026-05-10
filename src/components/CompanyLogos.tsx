import Image from "next/image";

const pharmaCompanies = [
  { name: "Lilly", file: "lilly" },
  { name: "Eisai", file: "eisai" },
  { name: "Biogen", file: "biogen" },
  { name: "GSK", file: "gsk" },
  { name: "Novartis", file: "novartis" },
  { name: "AstraZeneca", file: "astrazeneca" },
  { name: "Boehringer Ingelheim", file: "boehringer-ingelheim" },
];

const digitalHealthCompanies = [
  { name: "Propeller Health", file: "propeller-health-logo", ext: "jpeg" },
  { name: "Synapticure", file: "synapticure" },
  { name: "Heartbeat Health", file: "heartbeat-health" },
  { name: "AmplifyMD", file: "amplifymd" },
  { name: "LiverRight", file: "liverright" },
];

function CompanyLogo({ name, file, ext = "png" }: { name: string; file: string; ext?: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <Image
        src={`/logos/${file}.${ext}`}
        alt={name}
        width={24}
        height={24}
        className="w-5 h-5 object-contain"
      />
      <span className="font-sans text-[0.6875rem] font-medium text-muted whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export function PharmaLogos() {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      {pharmaCompanies.map((company) => (
        <CompanyLogo key={company.name} {...company} />
      ))}
    </div>
  );
}

export function DigitalHealthLogos() {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      {digitalHealthCompanies.map((company) => (
        <CompanyLogo key={company.name} {...company} />
      ))}
    </div>
  );
}
