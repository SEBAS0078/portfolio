import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import FadeIn from "./FadeIn";

const links = [
  {
    name: "GitHub",
    href: "https://github.com/SEBAS0078",
    icon: FaGithub,
    hover: "hover:text-white hover:border-white/40",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sebastian-cruz-549b82285/",
    icon: FaLinkedin,
    hover: "hover:text-blue-400 hover:border-blue-400/40",
  },
  {
    name: "Email",
    href: "mailto:sebascruz0502@gmail.com",
    icon: HiOutlineMail,
    hover: "hover:text-green-400 hover:border-green-400/40",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gray-950 text-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-bold text-gradient md:text-4xl">
            Get In Touch
          </h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Have a question or want to work together? Reach out.
          </p>
        </FadeIn>

        {/* Social Links */}
        <FadeIn delay={0.15} className="glass-card p-8 text-center">
          <h3 className="mb-6 text-2xl font-semibold text-gradient">Connect With Me</h3>

          <div className="flex flex-wrap justify-center gap-6">
            {links.map(({ name, href, icon: Icon, hover }) => (
              <a
                key={name}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex flex-col items-center gap-2 text-gray-300"
              >
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all group-hover:-translate-y-1 group-hover:shadow-lg ${hover}`}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <span className="text-sm font-medium transition-colors group-hover:text-white">
                  {name}
                </span>
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;
