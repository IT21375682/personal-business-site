"use client";

import { useState } from "react";
import { Typography, Input, Textarea, Button } from "@material-tailwind/react";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 👉 TODO: integrate with your backend or Formspree / Getform endpoint
    alert("Thank you, " + form.name + "! Your message has been sent.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-white py-32">
      <div className="container mx-auto grid grid-cols-1 gap-16 px-6 lg:grid-cols-2">
        {/* left – info */}
        <div className="max-w-lg">
          <Typography variant="small" color="blue" className="mb-3 font-bold uppercase tracking-widest">
            Contact Us
          </Typography>
          <Typography variant="h3" color="blue-gray" className="mb-6 leading-tight">
            Let’s turn your next big idea into reality
          </Typography>
          <Typography variant="paragraph" className="mb-8 opacity-80">
            Reach out to discuss your project, request a proposal, or simply say hello. We usually respond within one business day.
          </Typography>

          <ul className="space-y-6">
            <li className="flex items-start gap-4">
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
            </li>
            <li className="flex items-start gap-4">
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
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <MapPinIcon className="h-5 w-5" />
              </span>
              <div>
                <Typography variant="small" color="blue-gray" className="font-semibold">
                  Offices
                </Typography>
                <Typography variant="small" className="opacity-80">
                  Abu Dhabi, UAE &bull; Colombo, Sri Lanka
                </Typography>
              </div>
            </li>
          </ul>
        </div>

        {/* right – form */}
        <form onSubmit={handleSubmit} className="rounded-3xl bg-gray-50 p-8 shadow-sm lg:p-12">
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
          <Button type="submit" color="blue" size="lg" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}
