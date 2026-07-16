import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <main className="relative bg-gray-950">
        <Hero />
        <About />
        <Experience />
        <Resume />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;