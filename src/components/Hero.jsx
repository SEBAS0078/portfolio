"use client";
import React from "react";
import { motion } from "motion/react";
import { Link } from "react-scroll";
import { HiOutlineDownload } from "react-icons/hi";
import ShinyText from "./ShinyText";

const EASE = [0.21, 0.47, 0.32, 0.98];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex h-screen items-center justify-center overflow-hidden bg-gray-950"
    >
      {/* Background: mesh gradient + dot grid + blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.16),transparent_45%),radial-gradient(circle_at_80%_75%,rgba(168,85,247,0.16),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:28px_28px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black,transparent)]" />
        <div className="absolute left-0 top-0 h-72 w-72 animate-blob rounded-full bg-blue-600/20 blur-3xl" />
        <div className="animation-delay-2000 absolute bottom-0 right-0 h-96 w-96 animate-blob rounded-full bg-purple-600/20 blur-3xl" />
        <div className="animation-delay-4000 absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 animate-blob rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      {/* Main content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 px-4 text-center sm:px-6 lg:px-8"
      >
        <motion.div variants={item} className="mb-8 flex justify-center">
          <div className="animate-float rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-sky-400 p-1 shadow-2xl shadow-blue-500/20">
            <div className="h-40 w-40 overflow-hidden rounded-full ring-4 ring-gray-950 sm:h-48 sm:w-48">
              <img
                src="/images/cbas2.jpeg"
                alt="profile picture"
                className="h-full w-full transform object-cover object-center transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
        </motion.div>

        <motion.div variants={item}>
          <ShinyText
            className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
            text="Sebastian Cruz"
            speed={3}
            delay={0}
            color="#b8b8b8"
            shineColor="#ffffff"
            spread={15}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
          />
        </motion.div>

        <motion.p
          variants={item}
          className="mx-auto mb-8 max-w-2xl text-lg text-gray-300 sm:text-xl md:text-2xl"
        >
          Computer Science Student | Backend, Full-Stack & AI/ML Software Developer
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col justify-center gap-4 sm:flex-row"
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/40 active:translate-y-0"
          >
            <HiOutlineDownload className="h-5 w-5" />
            Resume
          </a>
          <Link
            to="experience"
            smooth
            duration={500}
            offset={-64}
            className="cursor-pointer rounded-full border border-white/20 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10 active:translate-y-0"
          >
            View My Work
          </Link>
          <Link
            to="projects"
            smooth
            duration={500}
            offset={-64}
            className="cursor-pointer rounded-full border border-white/20 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10 active:translate-y-0"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth
            duration={500}
            offset={-64}
            className="cursor-pointer rounded-full border border-white/20 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10 active:translate-y-0"
          >
            Get In Touch
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <svg
          className="h-6 w-6 text-white/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
