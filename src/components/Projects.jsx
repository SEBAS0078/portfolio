"use client";
import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import FadeIn from "./FadeIn";

const projects = [
  {
    title: "MiddLaundry Live",
    description:
      "Embedded systems + web project showing real-time laundry machine availability using and arduino board,  sensors, MQTT, and a React dashboard.",
    tech: ["React", "MQTT", "Arduino", "C/C++"],
    image: "/images/middlaundry.png",
    demo: "https://middlaundrylive.netlify.app",
    github: "https://github.com/SEBAS0078/MiddLaundryLive",
  },
  {
    title: "MiddBin",
    description:
      "Full-stack marketplace platform built with Next.js and Supabase for Middlebury students to buy/sell items conveniently.",
    tech: ["Next.js", "Supabase", "React", "Javascript"],
    image: "/images/middbin.jpeg",
    demo: "https://middbin.netlify.app",
    github: "https://github.com/SEBAS0078/MiddBin",
  },
  {
    title: "NPSV-deep",
    description:
      "Machine learning project for structural variant genotyping using deep neural networks with InfoNCE and RINCE loss functions.",
    tech: ["Python", "PyTorch", "PyTorch Lightning", "TensorBoard"],
    image: "/images/npsvdeep.jpg",
    demo: "#",
    github: "https://github.com/mlinderm/npsv3",
  },{
  title: "Text Analysis Website",
  description:
    "Interactive web tool for exploring and visualizing text data. Analyze sentiment, word frequencies, bigrams, and TF-IDF across one or multiple documents, with clear explanations to make text mining accessible.",
  tech: ["R", "R-Shiny App", "Text Mining", "NLP", "Data Visualization"],
  image: "/images/text-mining.png",
  demo: "https://sebastiancruz.shinyapps.io/TextAnalyserApp/", // replace with live site URL
  github: "#", // replace if repo is public
},
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold text-gradient md:text-4xl">
            Featured Projects
          </h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Here are some of my recent projects.
          </p>
        </FadeIn>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, idx) => (
            <FadeIn
              key={project.title}
              delay={idx * 0.1}
              className="glass-card group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-400/30 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90" />
              </div>

              {/* Project Content */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="mb-2 text-xl font-semibold text-gradient transition-colors">
                  {project.title}
                </h3>
                <p className="mb-3 flex-1 text-sm text-gray-300">{project.description}</p>

                {/* Tech Tags */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-blue-400/20 bg-blue-500/10 px-2 py-1 text-xs text-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.demo && project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30"
                    >
                      <FaExternalLinkAlt className="h-3 w-3" />
                      Live Demo
                    </a>
                  )}
                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10 hover:shadow-lg"
                    >
                      <FaGithub className="h-3.5 w-3.5" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
