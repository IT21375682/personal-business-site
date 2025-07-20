"use client";

import { Typography } from "@material-tailwind/react";
import {
  ChartBarIcon,
  BanknotesIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";
import { motion,cubicBezier } from "framer-motion";

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
    transition: { 
      duration: 0.7, 
      ease: cubicBezier(0.22, 1, 0.36, 1) 
    },
  },
};

function ServiceCard({ icon: Icon, title, description }: Service) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -6, boxShadow: "0px 12px 24px rgba(0,0,0,0.06)" }}
      whileTap={{ scale: 0.97 }}
      className="flex max-w-sm flex-col gap-4 rounded-xl bg-white p-6 text-center shadow-sm"
    >
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
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <motion.section
      id="services"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white py-24"
    >
      <div className="container mx-auto flex flex-col items-center gap-16 px-6">
        {/* headline */}
        <motion.div variants={fadeInUp} className="max-w-2xl text-center">
          <Typography
            variant="small"
            color="blue"
            className="mb-2 font-bold uppercase tracking-widest"
          >
            What We Do
          </Typography>
          <Typography variant="h2" color="blue-gray" className="mb-4">
            A Smart Way For Your Business
          </Typography>
          <Typography variant="paragraph" className="opacity-70">
            Agilos helps you convert your data into a strategic asset and get top‑notch business insights.
          </Typography>
        </motion.div>

        {/* service cards */}
        <motion.div
          variants={container}
          className="grid w-full grid-cols-1 gap-10 md:grid-cols-3 lg:gap-14"
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default ServicesSection;
