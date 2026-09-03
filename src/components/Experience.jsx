import { HiOutlineBriefcase } from "react-icons/hi";
import FadeIn from "./FadeIn";

const experience = [
  {
    role: "AI Lead and Backend Developer",
    company: "Altheros Capital",
    location: "Remote",
    dates: "Spring 2026 – Present",
    current: true,
    bullets: [
      "Led backend AI team as technical lead, coordinating development efforts, reviewing pull requests, assigning tasks, and contributing to Agile sprint planning and architectural decisions.",
      "Designed and implemented Retrieval-Augmented Generation (RAG) infrastructure in Python, building document ingestion pipelines that process, chunk, embed, and store knowledge in PostgreSQL/pgvector to support AI-powered knowledge retrieval.",
      "Built RESTful backend APIs, data models, and AI services using Python and Pydantic, researching and evaluating new technologies to improve system scalability, maintainability, and clean architecture.",
    ],
    tech: ["Python", "RAG", "PostgreSQL", "pgvector", "Pydantic"],
  },
  {
    role: "Backend Developer",
    company: "Text Maddie",
    location: "Remote",
    dates: "Summer 2026",
    current: false,
    bullets: [
      "Developed backend workflows for AI-powered lead conversion agents, implementing Python logic that automated follow-ups, appointment scheduling, CRM updates, and integrations across HubSpot, Slack, and messaging platforms.",
      "Engineered AI agent behaviors, workflows, and tool integrations to support natural customer conversations while triggering automated business processes and coordinating multi-agent interactions.",
      "Diagnosed and resolved production issues through log analysis, workflow tracing, and backend debugging to ensure reliable AI agent performance.",
    ],
    tech: ["Python", "AI Agents", "HubSpot API", "Slack API"],
  },
  {
    role: "Machine Learning Research Assistant",
    company: "Middlebury College",
    location: "Middlebury, VT",
    dates: "Summer 2025",
    current: false,
    bullets: [
      "Implemented InfoNCE and RINCE loss functions for NPSV-deep, a machine learning project for structural variant genotyping using deep neural networks in PyTorch, improving embedding-based classification accuracy by 0.5–2.9% across 4 datasets and increasing non-reference concordance by up to 3%.",
      "Trained and evaluated deep learning models in PyTorch Lightning using TensorBoard, optimizing model parameters and maintaining working iterations via Git version control.",
    ],
    tech: ["PyTorch", "PyTorch Lightning", "TensorBoard", "Deep Learning"],
  },
  {
    role: "Data Science Research Assistant",
    company: "Town of Bristol",
    location: "Bristol, VT",
    dates: "Summer 2025",
    current: false,
    bullets: [
      "Analyzed Vermont Department of Taxes data to identify Local Option Tax (LOT) adoption, category usage, and revenue trends across municipalities.",
      "Developed 2024 LOT revenue projections for Bristol by category, accounting for the state's 30% share and data gaps to identify potential underreported revenue.",
      "Compared LOT programs in Brandon, Middlebury, and Vergennes, synthesizing revenue allocation and local business feedback to assess economic impacts, transparency, and public support.",
    ],
    tech: ["Data Analysis", "Research", "Reporting"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-gray-950 text-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold text-gradient md:text-4xl">Experience</h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
        </FadeIn>

        <div className="relative space-y-8">
          {/* Timeline line */}
          <div className="absolute bottom-2 left-6 top-2 hidden w-px bg-gradient-to-b from-blue-400/40 via-purple-400/30 to-transparent sm:block" />

          {experience.map((job, idx) => (
            <FadeIn key={job.company} delay={idx * 0.1} className="relative sm:pl-16">
              {/* Timeline dot */}
              <div className="absolute left-6 top-6 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 ring-4 ring-gray-950 sm:block" />

              <div className="glass-card p-6 transition-all hover:-translate-y-1 hover:border-blue-400/30">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex gap-4">
                    <div className="hidden h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 sm:flex">
                      <HiOutlineBriefcase className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gradient sm:text-xl">{job.role}</h3>
                      <p className="text-sm text-gray-300">
                        <span className="font-medium text-white">{job.company}</span> · {job.location}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`flex-shrink-0 self-start rounded-full border px-3 py-1 text-xs font-medium ${
                      job.current
                        ? "border-green-400/30 bg-green-500/10 text-green-300"
                        : "border-white/10 bg-white/5 text-gray-300"
                    }`}
                  >
                    {job.current && (
                      <span className="mr-1.5 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-green-400 align-middle" />
                    )}
                    {job.dates}
                  </span>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-gray-300">
                  {job.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-blue-400" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {job.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-blue-400/20 bg-blue-500/10 px-2 py-1 text-xs text-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
