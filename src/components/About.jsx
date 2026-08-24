"use client";
import { motion } from "motion/react";
import FadeIn from "./FadeIn";

const skills = [
  "Python", "FastAPI", "Pydantic", "PostgreSQL", "React", "Next.js", "TypeScript",
  "TailwindCSS", "JavaScript", "PyTorch", "Java", "C/C++", "R", "HTML", "CSS",
  "Supabase", "Git/GitHub", "RESTful APIs", "Agile/Scrum", "MQTT", "Node.js"
];

const languages = [
  "English (Fluent)", "Spanish (Native)", "Portuguese (Intermediate)"
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-950 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold text-gradient md:text-4xl">About Me</h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
        </FadeIn>

        <div className="grid items-start gap-10 lg:grid-cols-2">
          {/* Text content */}
          <FadeIn delay={0.1} className="space-y-4 text-base text-gray-300">
            <p>
              Hi! I'm <strong className="text-white">Sebastian Cruz</strong>, a Computer Science student at Middlebury College
              (College Scholar's List, QuestBridge Scholar) and AI Lead & Backend Developer at{" "}
              <strong className="text-white">Altheros Capital</strong>, where I lead a backend AI team and design
              Retrieval-Augmented Generation (RAG) infrastructure. I'm passionate about solving real-world problems with
              code, from backend systems and AI/ML pipelines to full-stack web apps.
            </p>
            <p>
              My work includes building RAG document ingestion pipelines and RESTful AI services in Python and Pydantic at
              Altheros Capital, developing backend workflows and CRM integrations for AI lead-conversion agents at{" "}
              <strong className="text-white">Text Maddie</strong>, and implementing loss functions for deep neural
              networks in PyTorch as a Research Assistant on <strong className="text-white">NPSV-deep</strong>, a
              structural variant genotyping project at Middlebury. I also co-built{" "}
              <strong className="text-white">MiddBin</strong>, a full-stack marketplace for Middlebury students built with
              Next.js, React, TypeScript, Java, and Supabase, serving as Scrum Master.
            </p>
            <p>
              I love taking complex problems, breaking them down, and delivering solutions that are both
              technically solid and user-friendly. When I'm not coding, I enjoy visual arts, traveling,
              video games, and films.
            </p>
          </FadeIn>

          {/* Skills Card */}
          <FadeIn delay={0.2} className="glass-card p-6">
            <h3 className="mb-4 text-xl font-semibold text-gradient">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, idx) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.04 }}
                  className="cursor-default rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs text-blue-200 transition-all hover:-translate-y-0.5 hover:border-blue-400/50 hover:bg-blue-500/20"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            <h3 className="mb-3 mt-6 text-xl font-semibold text-gradient">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang, idx) => (
                <motion.span
                  key={lang}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="cursor-default rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1 text-xs text-purple-200"
                >
                  {lang}
                </motion.span>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;
