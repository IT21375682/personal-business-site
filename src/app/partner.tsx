"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

// List your brand logo filenames here (place them in /public/brands/)
const LOGOS = [
  "/image/brands/0.png",
  "/image/brands/1.png",
  "/image/brands/2.png",
  "/image/brands/3.png",
  "/image/brands/1.png",
  "/image/brands/2.png", // repeat or expand as needed
];

export default function PartnersSection() {
  return (
    <section id="partners" className="bg-white py-20 overflow-hidden">
      <div className="container mx-auto mb-10 text-center">
        <Typography variant="small" color="blue" className="font-bold uppercase tracking-widest">
          Trusted by leading organisations
        </Typography>
        <Typography variant="h3" color="blue-gray" className="mt-2">
          Our Partners &amp; Clients
        </Typography>
      </div>

      {/* marquee wrapper */}
      <div className="relative w-full overflow-x-hidden py-10">
        <div className="animate-scroll flex w-max gap-14 px-8" aria-label="Brand logos carousel">
          {LOGOS.concat(LOGOS).map((logo, idx) => (
            <Image
              key={idx}
              src= {logo}
              alt={logo.replace(/\.png|\.jpg|\.svg/, "")}
              width={80}
              height={60}
              className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>

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
      `}</style>
    </section>
  );
}
