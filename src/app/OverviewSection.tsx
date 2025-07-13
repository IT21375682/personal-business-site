"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { ChartBarSquareIcon, TrophyIcon, StarIcon } from "@heroicons/react/24/solid";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Stat {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  value: number;
  suffix?: string;
  label: string;
}

const STATS: Stat[] = [
  { icon: TrophyIcon, value: 235, suffix: "+", label: "Best Awards" },
  { icon: StarIcon, value: 98, suffix: "k", label: "Happy Clients" },
];

/* --------------------------------------------------
 * Animation variants
 * --------------------------------------------------*/
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeInUp = {
  hidden: { y: 40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1 } },
};

function Counter({ value, suffix = "", inView }: { value: number; suffix?: string; inView: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(value / (duration / 30));
    const int = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(int);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(int);
  }, [inView, value]);

  return (
    <Typography variant="h3" color="blue-gray" className="font-bold leading-none">
      {count}
      {count === value ? suffix : ""}
    </Typography>
  );
}

export default function OverviewSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.section
      id="overview"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="relative overflow-hidden bg-white py-32"
    >
      {/* wave background */}
      <motion.span
        variants={fadeIn}
        className="pointer-events-none absolute inset-0 -z-10 bg-[url('/image/overview_shape.png')] bg-cover bg-right lg:bg-center"
      />

      <div className="container mx-auto grid grid-cols-1 items-center gap-24 px-6 lg:grid-cols-2">
        {/* image collage */}
        <motion.div
          variants={fadeInUp}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <Image
              src="/image/person.png"
              alt="Consultant overview"
              width={500}
              height={620}
              className="rounded-3xl object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="absolute -bottom-10 right-0 w-64 sm:w-64 md:w-72 lg:-right-16"
          >
            <Image
              src="/image/team.png"
              alt="Team brainstorming"
              width={260}
              height={320}
              className="rounded-2xl object-cover"
            />
          </motion.div>
          {/* center icon (optional, animate someday) */}
          {/* <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">
            <ChartBarSquareIcon className="h-8 w-8" />
          </span> */}
        </motion.div>

        {/* content */}
        <motion.div variants={fadeInUp} className="max-w-lg" ref={ref}>
          <Typography
            variant="small"
            color="blue"
            className="mb-3 font-bold uppercase tracking-widest"
          >
            Company Overview
          </Typography>
          <Typography variant="h3" color="blue-gray" className="mb-6 leading-tight">
            Plan your business strategy with our experts
          </Typography>
          <Typography variant="paragraph" className="mb-4 opacity-80">
            We help forward-thinking organisations transform vision into practical, data-driven strategies. From feasibility studies to market entry, we deliver bespoke solutions that fuel sustainable growth.
          </Typography>
          <Typography variant="paragraph" className="mb-8 opacity-80">
            Our multidisciplinary team combines boardroom experience with hands-on operational insight, ensuring every initiative is both ambitious and achievable.
          </Typography>

          {/* stats */}
          <motion.ul variants={container} className="grid gap-8 sm:grid-cols-2">
            {STATS.map(({ icon: Icon, value, suffix, label }) => (
              <motion.li key={label} variants={fadeInUp} className="flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon className="h-7 w-7" />
                </span>
                <div>
                  <Counter value={value} suffix={suffix} inView={inView} />
                  <Typography variant="small" className="opacity-70">
                    {label}
                  </Typography>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </motion.section>
  );
}
