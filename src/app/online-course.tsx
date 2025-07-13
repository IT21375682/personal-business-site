"use client";

import { Typography } from "@material-tailwind/react";
import {
  ChartBarIcon,
  BanknotesIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";

interface Service {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const SERVICES: Service[] = [
  {
    icon: ChartBarIcon,
    title: "Growing Business",
    description:
      "Shantha helps you convert finance data into strategic assets for growth.",
  },
  {
    icon: BanknotesIcon,
    title: "Finance Investment",
    description:
      "Unlock profitable investment pathways with data‑driven insights.",
  },
  {
    icon: ClipboardDocumentCheckIcon,
    title: "Tax Advisory",
    description:
      "Navigate complex tax landscapes while maximising compliance & savings.",
  },
];

function ServiceCard({ icon: Icon, title, description }: Service) {
  return (
    <div className="flex max-w-sm flex-col gap-4 rounded-xl bg-white p-6 text-center shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
      {/* icon wrapper */}
      <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50">
        <Icon className="h-7 w-7 text-blue-600" />
      </span>
      <Typography variant="h6" color="blue-gray">
        {title}
      </Typography>
      <Typography variant="small" className="opacity-80">
        {description}
      </Typography>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="container mx-auto flex flex-col items-center gap-16 px-6">
        {/* headline */}
        <div className="max-w-2xl text-center">
          <Typography variant="small" color="blue" className="mb-2 font-bold uppercase tracking-widest">
            What We Do
          </Typography>
          <Typography variant="h2" color="blue-gray" className="mb-4">
            A Smart Way For Your Business
          </Typography>
          <Typography variant="paragraph" className="opacity-70">
            Agilos helps you convert your data into a strategic asset and get top‑notch business insights.
          </Typography>
        </div>

        {/* service cards */}
        <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-3 lg:gap-14">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
