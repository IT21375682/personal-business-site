"use client";

import Image from "next/image";
import Link from "next/link";
import { Typography, Button } from "@material-tailwind/react";
import {
  BanknotesIcon,
  CalculatorIcon,
  LightBulbIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";

interface ServiceCardProps {
  title: string;
  img: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
}

const SERVICES: ServiceCardProps[] = [
  {
    title: "Finance Planning",
    img: "/image/services/3.png",
    icon: BanknotesIcon,
    href: "#",
  },
  {
    title: "Tax File Audit",
    img: "/image/services/3.png",
    icon: CalculatorIcon,
    href: "#",
  },
  {
    title: "Investment Idea",
    img: "/image/services/3.png",
    icon: LightBulbIcon,
    href: "#",
  },
  {
    title: "Risk Management",
    img: "/image/services/3.png",
    icon: ShieldCheckIcon,
    href: "#",
  },
];

function ServiceCard({ title, img, icon: Icon, href }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group relative block overflow-hidden rounded-xl shadow-sm transition-transform hover:-translate-y-1 focus-visible:outline-none"
    >
      <Image
        src={img}
        alt={title}
        width={400}
        height={500}
        className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-blue-900/20 flex flex-col items-center justify-end p-6 text-center">
        <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-white">
          <Icon className="h-6 w-6" />
        </span>
        <Typography variant="h6" color="white" className="mb-2">
          {title}
        </Typography>
      </div>
      {/* decorative shape */}
      <span className="pointer-events-none absolute top-4 right-4 h-10 w-10 -rotate-6 rounded-md border border-white/30"></span>
    </Link>
  );
}

export default function ServicesShowcase() {
  return (
    <section
      id="services-alt"
      className="services-bg relative bg-[url('/image/services-bg02.jpg')] bg-cover bg-center bg-no-repeat py-32"
    >
      <div className="container mx-auto px-6">
        {/* heading row */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center md:gap-0">
          <div>
            <Typography
              variant="small"
              color="blue"
              className="mb-3 font-bold uppercase tracking-widest"
            >
              What We Do For You
            </Typography>
            <Typography
              variant="h3"
              color="blue-gray"
              className="max-w-xl leading-snug"
            >
              We can inspire and offer <br className="hidden sm:block" />
              different services
            </Typography>
          </div>

          <Button
            as={Link}
            href="#services"
            color="blue"
            variant="gradient"
            className="flex items-center gap-2"
          >
            See All Service
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L20 12l-6.5 7.5M20 12H4"
              />
            </svg>
          </Button>
        </div>

        {/* cards grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((svc) => (
            <ServiceCard key={svc.title} {...svc} />
          ))}
        </div>
      </div>
    </section>
  );
}
