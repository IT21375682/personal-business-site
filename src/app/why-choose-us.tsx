"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { motion, cubicBezier } from "framer-motion";

/* -------------------------------------------
 * Animation variants
 * -----------------------------------------*/
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      ease: cubicBezier(0.22, 1, 0.36, 1),
    },
  },
};

const fadeInUp = {
  hidden: { y: 40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: cubicBezier(0.22, 1, 0.36, 1),
    },
  },
};
const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1 } },
};

// Key value‑props distilled from Shantha Jayasena’s public profile
const CHECKS = [
  "Cross‑border sourcing & strategic partnerships",
  "Board‑level leadership at Lanka Leyland PLC & Al Maktoum Group",
  "Certified Commercial Arbitrator & Master Management Consultant",
  "Consistent 20%+ revenue uplift for clients across 3 continents",
];

function CheckItem({ text }: { text: string }) {
  return (
    <motion.li variants={fadeInUp} className="flex items-start gap-2">
      <CheckCircleIcon className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
      <span className="text-blue-gray-700">{text}</span>
    </motion.li>
  );
}

export function AboutSection() {
  return (
    <motion.section
      id="about"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="relative overflow-hidden bg-white py-24"
    >
      {/* diamond background pattern (right) */}
      <motion.span
        variants={fadeIn}
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-[url('/image/pattern-diamonds.svg')] bg-contain bg-right bg-no-repeat lg:block"
      />

      <div className="container mx-auto grid grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
        {/* left – image block */}
        <motion.div
          variants={fadeInUp}
          className="relative mx-auto max-w-sm lg:max-w-none"
        >
          {/* dotted decoration */}
          <motion.span
            variants={fadeIn}
            className="pointer-events-none absolute -left-12 top-20 hidden h-40 w-40 bg-[url('/image/pattern-dots.svg')] bg-contain bg-left-top bg-no-repeat lg:block"
          />

          {/* main image */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="overflow-hidden rounded-3xl"
          >
            <Image
              src="/image/person-sp1.png"
              alt="Shantha Jayasena presenting on stage"
              width={480}
              height={600}
              className="h-auto w-full object-cover"
              priority
            />
          </motion.div>

          {/* secondary image */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="absolute -bottom-10 right-0 w-48 sm:w-56 md:w-64"
          >
            <Image
              src="/image/team.png"
              alt="Team discussion facilitated by Shantha"
              width={320}
              height={208}
              className="rounded-2xl object-cover"
            />
          </motion.div>

          {/* years badge */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
            className="absolute -bottom-20 left-0 flex w-72 items-center rounded-3xl bg-blue-600 py-6 pl-6 pr-10 text-white shadow-lg"
          >
            <div className="mr-4 text-center">
              <Typography variant="h3" className="leading-none">
                28
              </Typography>
              <Typography
                variant="small"
                className="-mt-1 font-semibold uppercase tracking-wide"
              >
                Years
              </Typography>
            </div>
            <Typography variant="small" className="opacity-90">
              Guiding organisations toward sustainable growth since 1997.
            </Typography>
          </motion.div>
        </motion.div>

        {/* right – text block */}
        <motion.div variants={fadeInUp} className="max-w-lg lg:pl-8">
          <Typography
            variant="small"
            color="blue"
            className="mb-3 font-bold uppercase tracking-widest"
          >
            Get to know Shantha
          </Typography>
          <Typography
            variant="h3"
            color="blue-gray"
            className="mb-6 leading-tight"
          >
            28 Years of Turning Ambition into Advantage
          </Typography>
          <Typography variant="paragraph" className="mb-6 opacity-80">
            From boardrooms in Abu Dhabi to innovation hubs in Colombo, Shantha
            Jayasena has spent nearly three decades helping companies untangle
            complexity, optimise operations, and capture new markets. His
            toolkit blends strategic finance, operational excellence and
            human‑centred leadership—delivering measurable impact without adding
            organisational drag.
          </Typography>
          {/* checklist */}
          <motion.ul variants={container} className="mb-6 space-y-3">
            {CHECKS.map((c) => (
              <CheckItem key={c} text={c} />
            ))}
          </motion.ul>
          <Typography variant="paragraph" className="mb-8 opacity-80">
            Today he advises C‑suites and emerging founders alike—designing
            growth road‑maps, training resilient leaders, and negotiating
            cross‑border deals that stand the test of time.
          </Typography>

          {/* testimonial row */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-4"
          >
            <Image
              src="/image/person.png"
              alt="Shantha Jayasena"
              width={56}
              height={56}
              className="h-14 w-14 rounded-full object-cover"
            />
            <div className="flex-1">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-semibold"
              >
                Shantha Jayasena
              </Typography>
              <Typography variant="small" className="opacity-70">
                Business Solution Consultant
              </Typography>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default AboutSection;
