"use client";

import { Button, Typography } from "@material-tailwind/react";
import { ChevronRightIcon, PlayCircleIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

/**
 * Animation variants
 * ----------------------------------------------------
 * container: handles staggering — children fire in sequence
 * fadeInUp: slide‑up & fade‑in for most elements
 * fadeIn: simple opacity reveal for large blurred shapes
 */
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
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1 } },
};

export default function Hero() {
  return (
    <motion.section
      id="home"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className="relative overflow-hidden bg-gradient-to-br from-white to-gray-100 min-h-screen pt-28 flex items-center"
    >
      {/* Decorative background shapes */}
      <motion.span
        variants={fadeIn}
        className="pointer-events-none absolute -top-16 right-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl lg:right-auto lg:left-1/3 lg:h-[450px] lg:w-[450px]"
      />
      <motion.span
        variants={fadeIn}
        className="pointer-events-none absolute bottom-0 right-0 hidden h-96 w-96 bg-[url('/image/pattern-dots.svg')] bg-contain bg-right bg-no-repeat lg:block"
      />

      <div className="container mx-auto flex flex-col items-center gap-10 px-6 lg:flex-row lg:gap-20">
        {/* Left column — Copy */}
        <motion.div variants={fadeInUp} className="max-w-xl lg:flex-1">
          <Typography
            variant="small"
            color="blue"
            className="mb-4 font-bold uppercase tracking-wider"
          >
            We are expert in this field
          </Typography>

          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-6 leading-tight"
          >
            Get a Smart Way <br className="hidden sm:block" /> For Your Business
          </Typography>

          <Typography
            variant="lead"
            color="blue-gray"
            className="mb-8 opacity-80"
          >
            Shantha Jayasena helps you convert your data into a strategic asset and gain top‑notch business insights that fuel sustainable growth.
          </Typography>

          {/* CTAs */}
          <div className="flex flex-col items-center gap-5 sm:flex-row">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="gradient"
                color="blue"
                size="lg"
                className="flex items-center gap-2 shadow-md"
                as="a"
                href="#services"
              >
                Our Services <ChevronRightIcon className="h-5 w-5" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="text"
                color="blue"
                size="lg"
                className="flex items-center gap-3"
                as="a"
                href="#video-overlay"
              >
                <PlayCircleIcon className="h-8 w-8" />
                <span className="underline">Watch the Video</span>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Right column — Image */}
        <motion.div
          variants={fadeInUp}
          className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:flex-1 lg:max-w-none"
        >
          <motion.img
            src="/image/person.png"
            alt="Shantha Jayasena, Business Consultant"
            className="relative z-10 w-full object-contain"
            loading="eager"
            fetchpriority="high"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            whileHover={{ scale: 1.03 }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
