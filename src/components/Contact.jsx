"use client";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-2">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Have a question or want to work together? Reach out on social media.
          </p>
        </div>

        <div>
          

          {/* Social Links */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
            <h3 className="text-2xl font-semibold mb-4 text-gradient">Connect With Me</h3>
            <p className="text-gray-300 mb-6">
              Feel free to reach out through any of these platforms.
            </p>

            <div className="flex flex-col gap-3 items-center">
              {/* Social Link */}
              <a
                href="https://github.com/SEBAS0078"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12..." />
                </svg>
                <span className="font-medium">GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/sebastiancruz/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-500 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569..." />
                </svg>
                <span className="font-medium">LinkedIn</span>
              </a>

              <a
                href="mailto:your-email@example.com"
                className="flex items-center gap-2 hover:text-green-400 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7..." />
                </svg>
                <span className="font-medium">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
