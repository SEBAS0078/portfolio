"use client";
import React from "react";

const projects = [
  {
    title: "MiddLaundry Live",
    description:
      "Embedded systems + web project showing real-time laundry machine availability using and arduino board,  sensors, MQTT, and a React dashboard.",
    tech: ["React", "MQTT", "Arduino", "C/C++"],
    image: "/images/middlaundry.png",
    demo: "https://middbin.netlify.app",
    github: "https://github.com/SEBAS0078/MiddLaundryLive",
  },
  {
    title: "MiddBin",
    description:
      "Full-stack marketplace platform built with Next.js and Supabase for Middlebury students to buy/sell items conveniently.",
    tech: ["Next.js", "Supabase", "React", "Javascript"],
    image: "/images/middbin.jpeg",
    demo: "https://middlaundrylive.netlify.app",
    github: "https://github.com/SEBAS0078/MiddBin",
  },
  {
    title: "NPSV-deep",
    description:
      "Machine learning project for structural variant genotyping using deep neural networks with InfoNCE and RINCE loss functions.",
    tech: ["Python", "PyTorch", "PyTorch Lightning", "TensorBoard"],
    image: "/images/npsvdeep.jpg",
    demo: "#",
    github: "#",
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
    <section id="projects" className="section-padding bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-2">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in web development, embedded systems, and machine learning.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden group hover:scale-105 transform transition duration-300"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-gradient group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-3">{project.description}</p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full"
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
                      className="bg-green-500 hover:bg-green-400 text-white px-4 py-2 rounded-lg text-sm font-semibold  shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 hover:bg-white/30 border border-white/30 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white/10  shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
