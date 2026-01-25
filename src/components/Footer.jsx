import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left side */}
        <p className="text-sm text-gray-400 text-center md:text-left">
          &copy; {new Date().getFullYear()} <span className="font-semibold text-white">Sebastian Cruz</span>. All rights reserved.
        </p>

        {/* Right side: Social links */}
        <div className="flex gap-4">
          <a
            href="https://github.com/SEBAS0078"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sebastian-cruz-549b82285/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
          >
            LinkedIn
          </a>
          <a
            href="mailto:sebascruz0502@gmail.com"
            className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
