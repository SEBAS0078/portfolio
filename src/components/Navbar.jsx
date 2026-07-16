"use client";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from "motion/react";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { name: "About", to: "about" },
  { name: "Experience", to: "experience" },
  { name: "Resume", to: "resume" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-gray-950/80 shadow-lg shadow-black/20 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link
            to="hero"
            smooth
            duration={500}
            className="cursor-pointer bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-lg font-bold text-transparent transition-transform hover:scale-105"
          >
            Sebastian Cruz
          </Link>

          {/* Desktop menu */}
          <ul className="hidden items-center gap-8 text-sm md:flex">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth
                  duration={500}
                  offset={-64}
                  spy
                  activeClass="!text-white"
                  className="animated-underline cursor-pointer pb-1 text-neutral-300 transition-colors hover:text-white"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile button */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="text-neutral-300 transition-colors hover:text-white md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="overflow-hidden border-t border-white/10 bg-gray-950/95 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col space-y-1 px-6 py-4">
              {navLinks.map((link, idx) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.25 }}
                >
                  <Link
                    to={link.to}
                    smooth
                    duration={500}
                    offset={-64}
                    onClick={() => setIsOpen(false)}
                    className="block cursor-pointer py-2 text-neutral-300 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
