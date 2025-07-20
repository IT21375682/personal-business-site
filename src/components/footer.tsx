"use client";

import { Typography, Button, Input } from "@material-tailwind/react";
import { motion , cubicBezier} from "framer-motion";

const MENU = ["Company", "Careers", "Press media", "Our Blog", "Privacy Policy"];
const QUICK = ["How it’s Work", "Partners", "Testimonials", "Case Studies", "Pricing"];
const SOCIAL = [
  { label: "Facebook", icon: "fa-brands fa-facebook-f", href: "https://facebook.com" },
  { label: "Twitter", icon: "fa-brands fa-twitter", href: "https://twitter.com" },
  { label: "Instagram", icon: "fa-brands fa-instagram", href: "https://instagram.com" },
  { label: "Pinterest", icon: "fa-brands fa-pinterest-p", href: "https://pinterest.com" },
  { label: "YouTube", icon: "fa-brands fa-youtube", href: "https://youtube.com" },
];

const CURRENT_YEAR = new Date().getFullYear();

/* --------------------------------------------------
 * Animation variants
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

export function Footer() {
  return (
    <motion.footer
      id="footer"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="relative bg-blue-50 px-8 pt-24 pb-14 text-blue-gray-900"
    >
      {/* Decorative wave lines */}
      <motion.span
        variants={fadeInUp}
        className="pointer-events-none absolute inset-0 -z-10 bg-[url('/image/footer-wave.svg')] bg-cover bg-top"
      />

      <div className="container mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2 lg:grid-cols-4">
        {/* 1️⃣ Logo & Contact */}
        <motion.div variants={fadeInUp} className="max-w-sm">
          {/* <img src="/logo.svg" alt="Gerow logo" width={120} height={40} /> */}
          <Typography variant="small" className="mt-4 mb-6 opacity-80">
            When an unknown printer took a galley of type & scrambled it to make a type specimen book.
          </Typography>
          <ul className="space-y-3 text-sm opacity-90">
            <li className="flex gap-2">
              <i className="fa-solid fa-phone text-blue-600" /> +123 888 9999
            </li>
            <li className="flex gap-2">
              <i className="fa-regular fa-clock text-blue-600" /> Mon – Sat: 8 am – 5 pm, Sunday: <span className="font-semibold">CLOSED</span>
            </li>
          </ul>
        </motion.div>

        {/* 2️⃣ Menu */}
        <motion.div variants={fadeInUp}>
          <Typography variant="h6" color="blue-gray" className="mb-4">
            Menu
          </Typography>
          <ul className="space-y-2 text-sm opacity-90">
            {MENU.map((item) => (
              <li key={item}>
                <Typography
                  as="a"
                  href="#"
                  className="py-1 font-normal !text-gray-700 transition-colors hover:!text-gray-900"
                >
                  {item}
                </Typography>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* 3️⃣ Quick Links */}
        <motion.div variants={fadeInUp}>
          <Typography variant="h6" color="blue-gray" className="mb-4">
            Quick Links
          </Typography>
          <ul className="space-y-2 text-sm opacity-90">
            {QUICK.map((item) => (
              <li key={item}>
                <Typography
                  as="a"
                  href="#"
                  className="py-1 font-normal !text-gray-700 transition-colors hover:!text-gray-900"
                >
                  {item}
                </Typography>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* 4️⃣ Newsletter */}
        <motion.div variants={fadeInUp} className="max-w-sm">
          <Typography variant="h6" color="blue-gray" className="mb-4">
            Our Newsletter
          </Typography>
          <Typography variant="small" className="mb-4 opacity-80">
            Sign up to Privitar’s weekly newsletter to get the latest updates.
          </Typography>
          <motion.form
            variants={container}
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks for subscribing!");
            }}
            className="mb-6 flex flex-col gap-4"
          >
            {/* @ts-ignore */}
            <Input label="Enter your e-mail" color="gray" type="email" required />
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <button type="submit" color="blue" className="w-full lg:w-fit bg-blue-400 p-1 rounded-md shadow-md">
                Subscribe
              </button>
            </motion.div>
          </motion.form>

          <div className="flex gap-3">
            {SOCIAL.map(({ icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.15 }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-blue-gray-900 transition-colors hover:bg-blue-600 hover:text-white"
              >
                <i className={`${icon} text-base`} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div variants={fadeInUp} className="container mx-auto mt-16 max-w-6xl text-center text-sm opacity-60">
        <Typography color="blue-gray">© {CURRENT_YEAR} DevNexion. All rights reserved.</Typography>
      </motion.div>
    </motion.footer>
  );
}

export default Footer;
