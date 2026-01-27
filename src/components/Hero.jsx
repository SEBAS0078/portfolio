"use client"
import React from "react";
import ShinyText from './ShinyText';


const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden flex items-center justify-center"
    >
      {/* Overlay + subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <ShinyText
         className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight"
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
        <div className="flex justify-center mb-8">
          <div className="w-48 h-48 rounded-full overflow-hidden">
            <img
              src="/images/cbas2.jpeg"
              alt="profile picture"
              className="w-full h-full object-cover object-center transform transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Computer Science Student | Web Development, Machine Learning & Embedded Systems
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold shadow-lg"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-white/30 hover:bg-white/10 transition-colors text-white font-semibold shadow-lg"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/70"
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
      </div>
    </section>
  );
};

export default Hero;
