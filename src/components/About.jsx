import React from "react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-2">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Text content */}
          <div className="space-y-4 text-gray-300 text-base">
            <p>
              Hi! I'm <strong>Sebastian Cruz</strong>, a Computer Science student at Middlebury College
              passionate about solving real-world problems with code and embedded systems.
              I have experience in full-stack web development, machine learning, and IoT projects.
            </p>
            <p>
              My work includes building end-to-end systems like <strong>MiddLaundry Live</strong>,
              where I designed vibration detection algorithms, integrated an Arduino board with an accelerometer and MQTT,
              and developed a React dashboard, and <strong>MiddBin</strong>, a full-stack Next.js
              marketplace for Middlebury students.
            </p>
            <p>
              I love taking complex problems, breaking them down, and delivering solutions that are both
              technically solid and user-friendly. When I'm not coding, I enjoy visual arts, traveling,
              video games, and exploring new technologies.
            </p>
          </div>

          {/* Skills Card */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gradient">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "React", "Next.js", "TailwindCSS", "Python", "PyTorch", "Java", "C/C++", "R",
                "HTML", "CSS", "JavaScript", "MQTT", "Node.js"
              ].map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
