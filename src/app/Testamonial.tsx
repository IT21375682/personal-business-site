"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { StarIcon } from "@heroicons/react/24/solid";

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
    <div className="flex flex-col gap-6 rounded-2xl bg-white p-8 shadow-md transition-shadow hover:shadow-lg">
      <Typography variant="paragraph" className="opacity-80">
        “{quote}”
      </Typography>
      <div className="flex items-center gap-4">
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
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-gray-50 py-32">
      <div className="container mx-auto px-6 text-center">
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

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
