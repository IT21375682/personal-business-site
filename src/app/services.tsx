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
import { motion , cubicBezier } from "framer-motion";

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

/* --------------------------------------------------
 * Animation variants
 * --------------------------------------------------*/
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeInUp = {
  hidden: { y: 40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: cubicBezier(0.22, 1, 0.36, 1) },
  },
};

function ServiceCard({ title, img, icon: Icon, href }: ServiceCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group relative block overflow-hidden rounded-xl shadow-sm focus-visible:outline-none"
    >
      <Link href={href} className="contents">
        {/* image */}
        <Image
          src={img}
          alt={title}
          width={400}
          height={500}
          className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-blue-900/90 to-blue-900/20 p-6 text-center">
          <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-white">
            <Icon className="h-6 w-6" />
          </span>
          <Typography variant="h6" color="white" className="mb-2">
            {title}
          </Typography>
        </div>
        {/* decorative shape */}
        <span className="pointer-events-none absolute top-4 right-4 h-10 w-10 -rotate-6 rounded-md border border-white/30" />
      </Link>
    </motion.div>
  );
}

export default function ServicesShowcase() {
  return (
    <motion.section
      id="services-alt"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="services-bg relative bg-[url('/image/services-bg02.jpg')] bg-cover bg-center bg-no-repeat py-14"
    >
      <div className="container mx-auto px-6">
        {/* heading row */}
        <motion.div
          variants={fadeInUp}
          className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center md:gap-0"
        >
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

      <Link href="#services">
 <Button
  color="blue"
  variant="gradient"
  className="flex items-center gap-2"
  placeholder=""
  onResize={() => {}}
  onResizeCapture={() => {}}
  onPointerEnterCapture={() => {}}
  onPointerLeaveCapture={() => {}}
>
    See All Service
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L20 12l-6.5 7.5M20 12H4"
              />
            </svg>
          </Button>
          </Link>
        </motion.div>

        {/* cards grid */}
        <motion.div
          variants={container}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SERVICES.map((svc) => (
            <ServiceCard key={svc.title} {...svc} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
