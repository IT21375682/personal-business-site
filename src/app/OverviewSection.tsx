"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { ChartBarSquareIcon, TrophyIcon, StarIcon } from "@heroicons/react/24/solid";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

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
    <section id="overview" className="relative overflow-hidden bg-white py-32">
      {/* wave background */}
      <span className="pointer-events-none absolute inset-0 -z-10 bg-[url('/image/overview_shape.png')] bg-cover bg-right lg:bg-center" />

      <div className="container mx-auto grid grid-cols-1 items-center gap-24 px-6 lg:grid-cols-2">
        {/* image collage */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <Image src="/image/person.png" alt="Consultant overview" width={500} height={620} className="rounded-3xl object-cover" />
          <Image
            src="/image/team.png"
            alt="Team brainstorming"
            width={260}
            height={320}
            className="absolute -bottom-10 right-0 rounded-2xl object-cover lg:-right-16"
          />
          {/* overlay shape */}
          {/* <Image src="/image/overview_img_shape.png" alt="decorative" width={120} height={120} className="absolute top-10 left-10 w-24 lg:w-32" /> */}
          {/* center icon */}
          {/* <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">
            <ChartBarSquareIcon className="h-8 w-8" />
          </span> */}
        </div>

        {/* content */}
        <div className="max-w-lg" ref={ref}>
          <Typography variant="small" color="blue" className="mb-3 font-bold uppercase tracking-widest">
            Company Overview
          </Typography>
          <Typography variant="h3" color="blue-gray" className="mb-6 leading-tight">
            Plan your business strategy with our experts
          </Typography>
          <Typography variant="paragraph" className="mb-4 opacity-80">
            We help forward‑thinking organisations transform vision into practical, data‑driven strategies. From feasibility studies to market entry, we deliver bespoke solutions that fuel sustainable growth.
          </Typography>
          <Typography variant="paragraph" className="mb-8 opacity-80">
            Our multidisciplinary team combines boardroom experience with hands‑on operational insight, ensuring every initiative is both ambitious and achievable.
          </Typography>

          {/* stats */}
          <ul className="grid gap-8 sm:grid-cols-2">
            {STATS.map(({ icon: Icon, value, suffix, label }) => (
              <li key={label} className="flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon className="h-7 w-7" />
                </span>
                <div>
                  <Counter value={value} suffix={suffix} inView={inView} />
                  <Typography variant="small" className="opacity-70">
                    {label}
                  </Typography>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
