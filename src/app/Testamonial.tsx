"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { StarIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ayesha Fernando",
    role: "CEO, LankanTech Holdings",
    avatar: "/testimonials/ayesha.jpg",
    quote:
      "Shantha’s growth roadmap added 24% to our top‑line revenue within twelve months—without increasing our headcount. His cross‑border sourcing expertise saved us weeks of procurement lead time.",
  },
  {
    name: "Omar Al‑Mansoori",
    role: "Group Finance Director, Al Maktoum Investment",
    avatar: "/testimonials/omar.jpg",
    quote:
      "We relied on Shantha to structure a complex JV across three jurisdictions. His ability to balance strategic risk with pragmatic execution is unmatched.",
  },
  {
    name: "Isabella Cruz",
    role: "Founder, FinEdu Academy",
    avatar: "/testimonials/isabella.jpg",
    quote:
      "Our EdTech platform tripled enrolments after Shantha re‑engineered our go‑to‑market strategy. He has a knack for turning insights into clear action.",
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
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} className="h-4 w-4 text-yellow-400" />
      ))}
    </div>
  );
}

function TestimonialCard({ name, role, avatar, quote }: Testimonial) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -6, boxShadow: "0px 12px 24px rgba(0,0,0,0.06)" }}
      whileTap={{ scale: 0.98 }}
      className="flex flex-col gap-6 rounded-2xl bg-white p-8 shadow-md"
    >
      <Typography variant="paragraph" className="opacity-80">
        “{quote}”
      </Typography>
      <div className="flex items-center gap-4">
        {/* If you eventually add avatars, animate them too */}
        {/* <Image src={avatar} alt={name} width={56} height={56} className="h-14 w-14 rounded-full object-cover" /> */}
        <div>
          <Typography variant="h6" color="blue-gray">
            {name}
          </Typography>
          <Typography variant="small" className="opacity-70">
            {role}
          </Typography>
          <Stars />
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  return (
    <motion.section
      id="testimonials"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-gray-50 py-32"
    >
      <motion.div variants={fadeInUp} className="container mx-auto px-6 text-center">
        <Typography
          variant="small"
          color="blue"
          className="mb-3 font-bold uppercase tracking-widest"
        >
          Our Testimonials
        </Typography>
        <Typography
          variant="h3"
          color="blue-gray"
          className="mx-auto mb-16 max-w-2xl leading-tight"
        >
          Leaders who’ve partnered with Shantha say it best
        </Typography>

        <motion.div
          variants={container}
          className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
        >
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
