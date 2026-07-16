const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-gray-950 py-6 text-gray-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:px-6 md:flex-row lg:px-8">
        {/* Left side */}
        <p className="text-center text-sm text-gray-400 md:text-left">
          &copy; {new Date().getFullYear()} <span className="font-semibold text-white">Sebastian Cruz</span>. All rights reserved.
        </p>

        {/* Right side: Social links */}
        <div className="flex gap-6">
          <a
            href="https://github.com/SEBAS0078"
            target="_blank"
            rel="noopener noreferrer"
            className="animated-underline pb-0.5 text-sm font-medium text-gray-400 transition-colors hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sebastian-cruz-549b82285/"
            target="_blank"
            rel="noopener noreferrer"
            className="animated-underline pb-0.5 text-sm font-medium text-gray-400 transition-colors hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="mailto:sebascruz0502@gmail.com"
            className="animated-underline pb-0.5 text-sm font-medium text-gray-400 transition-colors hover:text-white"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
