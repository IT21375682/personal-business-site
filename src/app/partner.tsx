"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { motion,cubicBezier } from "framer-motion";

// List your brand logo filenames here (place them in /public/image/brands/) or full URLs
const LOGOS = [
  "/image/brands/0.png",
  "/image/brands/1.png",
  "/image/brands/2.png",
  "/image/brands/3.png",
  "https://media.licdn.com/dms/image/v2/D5622AQE48t38ZCrduw/feedshare-shrink_800/B56ZWderI4HsAg-/0/1742103819763?e=1755129600&v=beta&t=OX2tNBPHnPvV-GiWAF9zJ5tlCciOArToATf8P4IjxQs",
  "https://media.licdn.com/dms/image/v2/D5622AQH9o51I1Y6UVg/feedshare-shrink_2048_1536/B56ZUYnLydGoAo-/0/1739874680876?e=1755129600&v=beta&t=Z4uv5fiamA5ZMvawyDk-FLc7Z99qPKQt7SFqfAFbjro",
  "https://media.licdn.com/dms/image/v2/D5622AQHL5rDF9i9VsA/feedshare-shrink_800/B56ZWLxc0eHEAg-/0/1741806754101?e=1755129600&v=beta&t=EFRdGqoPhSyGq0jnZdmjtwc0Li9GaMNlYtBB4WFbj70",
];

/* --------------------------------------------------
 * Animation variants (fade‑in slide‑up when section enters viewport)
 * --------------------------------------------------*/
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

export default function PartnersSection() {
  const localAndRemote = LOGOS.concat(LOGOS); // duplicate for seamless loop

  return (
    <motion.section
      id="partners"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white py-20 overflow-hidden"
    >
      <motion.div variants={fadeInUp} className="container mx-auto mb-10 text-center">
        <Typography
          variant="small"
          color="blue"
          className="font-bold uppercase tracking-widest"
        >
          Trusted by leading organisations
        </Typography>
        <Typography variant="h3" color="blue-gray" className="mt-2">
          Our Partners & Clients
        </Typography>
      </motion.div>

      {/* marquee wrapper */}
      <motion.div
        variants={fadeInUp}
        className="relative w-full overflow-x-hidden py-10"
      >
        <div
          className="animate-scroll flex w-max gap-14 px-8"
          aria-label="Brand logos carousel"
        >
          {localAndRemote.map((logo, idx) => (
            <Image
              key={idx}
              src={logo}
              alt={`brand-${idx}`}
              width={80}
              height={60}
              className="h-10 w-auto object-contain opacity-70 transition-opacity hover:opacity-100"
            />
          ))}
        </div>
      </motion.div>

      {/* keyframes */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        /* Pause marquee on hover for better UX */
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </motion.section>
  );
}
