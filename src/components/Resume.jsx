import { HiOutlineAcademicCap, HiOutlineBadgeCheck, HiOutlineDownload } from "react-icons/hi";
import FadeIn from "./FadeIn";

const Resume = () => {
  return (
    <section id="resume" className="section-padding bg-gray-950 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold text-gradient md:text-4xl">
            Resume
          </h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
        </FadeIn>

        {/* Download Button */}
        <FadeIn delay={0.1} className="mb-10 text-center">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/30"
          >
            <HiOutlineDownload className="h-5 w-5" />
            Download Resume
          </a>
        </FadeIn>

        {/* Highlights / Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Education Card */}
          <FadeIn delay={0.2} className="glass-card p-6 text-center transition-all hover:-translate-y-1 hover:border-blue-400/30">
            <div className="mb-4 flex justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
                <HiOutlineAcademicCap className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gradient">Education</h3>
            <p className="text-gray-300">
              <strong className="text-white">Middlebury College</strong><br />
              BA in Computer Science (Expected May 2027)<br />
              GPA: 3.82 | College Scholar's List | QuestBridge Scholar
            </p>
          </FadeIn>

          {/* Certifications Card */}
          <FadeIn delay={0.3} className="glass-card p-6 text-center transition-all hover:-translate-y-1 hover:border-blue-400/30">
            <div className="mb-4 flex justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
                <HiOutlineBadgeCheck className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gradient">Certifications</h3>
            <div className="text-gray-300">
              <p>CodePath Intermediate Web Development</p>
              <p>CodePath Intro to Web Development</p>
              <p>Google Project Management Professional Certificate</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Resume;
