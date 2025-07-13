"use client";

import { useState } from "react";
import { Typography, Input, Textarea, Button } from "@material-tailwind/react";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

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

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 👉 TODO: integrate with your backend or Formspree / Getform endpoint
    alert("Thank you, " + form.name + "! Your message has been sent.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <motion.section
      id="contact"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white py-32"
    >
      <div className="container mx-auto grid grid-cols-1 gap-16 px-6 lg:grid-cols-2">
        {/* left – info */}
        <motion.div variants={fadeInUp} className="max-w-lg">
          <Typography
            variant="small"
            color="blue"
            className="mb-3 font-bold uppercase tracking-widest"
          >
            Contact Us
          </Typography>
          <Typography variant="h3" color="blue-gray" className="mb-6 leading-tight">
            Let’s turn your next big idea into reality
          </Typography>
          <Typography variant="paragraph" className="mb-8 opacity-80">
            Reach out to discuss your project, request a proposal, or simply say hello. We usually respond within one business day.
          </Typography>

          <motion.ul variants={container} className="space-y-6">
            <motion.li variants={fadeInUp} className="flex items-start gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <PhoneIcon className="h-5 w-5" />
              </span>
              <div>
                <Typography variant="small" color="blue-gray" className="font-semibold">
                  Phone / WhatsApp
                </Typography>
                <Typography variant="small" className="opacity-80">
                  +971 5 XXX XX 8430
                </Typography>
              </div>
            </motion.li>
            <motion.li variants={fadeInUp} className="flex items-start gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <EnvelopeIcon className="h-5 w-5" />
              </span>
              <div>
                <Typography variant="small" color="blue-gray" className="font-semibold">
                  Email
                </Typography>
                <Typography variant="small" className="opacity-80">
                  connect@shantha‑consult.com
                </Typography>
              </div>
            </motion.li>
            <motion.li variants={fadeInUp} className="flex items-start gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <MapPinIcon className="h-5 w-5" />
              </span>
              <div>
                <Typography variant="small" color="blue-gray" className="font-semibold">
                  Offices
                </Typography>
                <Typography variant="small" className="opacity-80">
                  Abu Dhabi, UAE • Colombo, Sri Lanka
                </Typography>
              </div>
            </motion.li>
          </motion.ul>
        </motion.div>

        {/* right – form */}
        <motion.form
          variants={fadeInUp}
          onSubmit={handleSubmit}
          className="rounded-3xl bg-gray-50 p-8 shadow-sm lg:p-12"
        >
          <div className="mb-6 grid gap-6 sm:grid-cols-2">
            <Input
              label="Full Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              color="blue"
            />
            <Input
              label="Email Address"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              color="blue"
            />
          </div>
          <Textarea
            label="How can we help?"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={6}
            required
            color="blue"
            className="mb-6"
          />
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Button type="submit" color="blue" size="lg" className="w-full">
              Send Message
            </Button>
          </motion.div>
        </motion.form>
      </div>
    </motion.section>
  );
}
