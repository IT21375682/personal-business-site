"use client";

import { Button, Typography } from "@material-tailwind/react";
import { ChevronRightIcon, PlayCircleIcon } from "@heroicons/react/24/solid";

function Hero() {
  return (
     <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-white to-gray-100 min-h-screen pt-28 flex items-center"
    >
      {/* Decorative background shapes */}
      <span className="pointer-events-none absolute -top-16 right-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl lg:right-auto lg:left-1/3 lg:h-[450px] lg:w-[450px]" />
      <span className="pointer-events-none absolute bottom-0 right-0 hidden h-96 w-96 bg-[url('/image/pattern-dots.svg')] bg-contain bg-right bg-no-repeat lg:block" />

      <div className="container mx-auto flex flex-col items-center gap-10 px-6 lg:flex-row lg:gap-20">
        {/* Left column — Copy */}
        <div className="max-w-xl lg:flex-1">
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
          </div>
        </div>

        {/* Right column — Image */}
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:flex-1 lg:max-w-none">
          <img
            src="/image/person.png"
            alt="Shantha Jayasena, Business Consultant "
            className="relative z-10 w-full object-contain"
            loading="eager"
            fetchpriority="high"
          />
          {/* Blue ring accent behind image */}
          {/* <span className="pointer-events-none absolute inset-0 z-0 m-auto h-4/5 w-4/5 rounded-full border-[25px] border-blue-600/70 sm:border-[35px]" /> */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
