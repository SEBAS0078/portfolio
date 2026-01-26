import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="section-padding bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-2">
            Resume
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Download Button */}
        <div className="text-center mb-10">
          <a
            href="/resume.pdf" // Replace with your PDF path
            download
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-2 px-4 rounded-lg shadow"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Resume
          </a>
        </div>

        {/* Highlights / Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Education Card */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gradient">Education</h3>
            <p className="text-gray-300">
              <strong>Middlebury College</strong><br />
              BA in Computer Science (Expected May 2027)<br />
              GPA: 3.82 | College Scholar's List | QuestBridge Scholar
            </p>
          </div>

          {/* Certifications Card */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gradient">Certifications</h3>
            <div className="text-gray-300">
              <p>CodePath Intermediate Web Development</p>
              <p>CodePath Intro to Web Development</p>
              <p>Google Project Management Professional Certificate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
