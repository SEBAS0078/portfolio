import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <main className="relative rounded-2xl space-y-10 bg-gray-900 ">
        <Hero />
        <About />
        <Resume />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;