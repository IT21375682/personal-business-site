"use client";

import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}
function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        variant="small"
        className="font-medium transition-colors hover:text-primary-600"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);
  const handleDialog = () => setOpenDialog((cur) => !cur);

  React.useEffect(() => {
    const handleResize = () => window.innerWidth >= 960 && setOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolling(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // dynamic color helpers
  const brandColor = isScrolling ? "blue-gray" : "black";
  const textColor = isScrolling ? "text-gray-900" : "text-black";
  const iconColor = isScrolling ? "gray" : "black";

  return (
    <>
      <MTNavbar
        fullWidth
        shadow={false}
        blurred={false}
        color={isScrolling ? "white" : "transparent"}
        className="fixed top-0 z-50 border-0 backdrop-blur-md"
      >
        <div className="container mx-auto flex items-center justify-between py-2 lg:py-3">
          {/* Brand */}
          <Typography variant="h6" color={brandColor} className="tracking-tight">
            Shantha&nbsp;Jayasena
          </Typography>
          {/* Desktop Nav */}
          <ul className={`ml-10 hidden items-center gap-6 lg:flex ${textColor}`}>
            <NavItem href="#home">Home</NavItem>
            <NavItem href="#about">About</NavItem>
            <NavItem href="#services">Services</NavItem>
            <NavItem href="#testimonials">Testimonials</NavItem>
            <NavItem href="#insights">Insights</NavItem>
            <NavItem href="#contact">Contact</NavItem>
          </ul>
          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <IconButton
              variant="text"
              color={iconColor}
              size="sm"
              aria-label="LinkedIn"
              as="a"
              href="https://www.linkedin.com/in/shantha-jayasena-73950359/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin text-base" />
            </IconButton>
            <IconButton
              variant="text"
              color={iconColor}
              size="sm"
              aria-label="WhatsApp"
              as="a"
              href="https://wa.me/97xxxxxxxxx"
              target="_blank"
            >
              <i className="fa-brands fa-whatsapp text-base" />
            </IconButton>
            <Button color="blue" size="sm" className="shadow-md" onClick={handleDialog}>
              Book a Call
            </Button>
          </div>
          {/* Mobile Toggle */}
          <IconButton
            variant="text"
            color={iconColor}
            onClick={handleOpen}
            className="ml-auto inline-block lg:hidden"
            aria-label="Toggle Navigation Menu"
          >
            {open ? (
              <XMarkIcon strokeWidth={2} className="h-6 w-6" />
            ) : (
              <Bars3Icon strokeWidth={2} className="h-6 w-6" />
            )}
          </IconButton>
        </div>
        {/* Mobile Nav */}
        <Collapse open={open}>
          <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5 shadow-lg lg:hidden">
            <ul className="flex flex-col gap-4 text-blue-gray-900">
              <NavItem href="#home">Home</NavItem>
              <NavItem href="#about">About</NavItem>
              <NavItem href="#services">Services</NavItem>
              <NavItem href="#case-studies">Case Studies</NavItem>
              <NavItem href="#insights">Insights</NavItem>
              <NavItem href="#contact">Contact</NavItem>
            </ul>
            <div className="mt-6 flex items-center gap-3">
              <IconButton
                variant="text"
                color="gray"
                size="sm"
                aria-label="LinkedIn"
                as="a"
                href="https://www.linkedin.com/in/shantha-jayasena-73950359/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin text-base" />
              </IconButton>
              <IconButton
                variant="text"
                color="gray"
                size="sm"
                aria-label="WhatsApp"
                as="a"
                href="https://wa.me/97xxxxxxxxx"
                target="_blank"
              >
                <i className="fa-brands fa-whatsapp text-base" />
              </IconButton>
              <Button color="blue" size="sm" className="ml-auto" onClick={handleDialog}>
                Book a Call
              </Button>
            </div>
          </div>
        </Collapse>
      </MTNavbar>

      {/* Book a Call Dialog */}
      <Dialog size="lg" open={openDialog} handler={handleDialog} aria-label="Book a consultation call dialog">
        <DialogHeader className="justify-between">
          <Typography variant="h5" color="blue-gray">
            Book a Consultation Call
          </Typography>
          <IconButton variant="text" color="gray" onClick={handleDialog} aria-label="Close dialog">
            <XMarkIcon className="h-6 w-6" />
          </IconButton>
        </DialogHeader>

        <DialogBody divider className="pt-4">
          {/* Simple form – replace with Calendly embed or backend integration */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! We will confirm your slot via email.");
              handleDialog();
            }}
            className="grid gap-6 md:grid-cols-2"
          >
            <Input label="Full Name" name="name" required color="blue" />
            <Input label="Email Address" type="email" name="email" required color="blue" />
            <div className="md:col-span-2">
              <Input label="Preferred Date & Time" type="datetime-local" name="datetime" required color="blue" />
            </div>
            <div className="md:col-span-2">
              <Textarea label="Anything specific to discuss?" rows={4} color="blue" />
            </div>
            <Button type="submit" color="blue" className="md:col-span-2">
              Confirm Booking
            </Button>
          </form>
        </DialogBody>

        <DialogFooter>
          <Typography variant="small" className="opacity-70">
            We respect your privacy. Your information will only be used to schedule the call.
          </Typography>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default Navbar;
