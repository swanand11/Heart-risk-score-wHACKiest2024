import React, { useState } from "react";
import ParticlesComponent from "./bg";
import Hero from "./hero/hero";
import Footer from "./footer/Footer";
import Testimonial from "./Testimonial/Testimonial";
import Contact from "./contact/Contact";
import About from "./About/About";
import Navbar from "./Navbar/Navbar";

const LandingPage = () => {
  const landingpagetext = [
    { text: "A healthy heart is the key to happiness in life" },
    { text: "With a healthy heart, the beat goes on." },
    { text: "The disease of the heart is worse than the disease of the body." },
  ];

  const [count, setCount] = useState(0);

  return (
    <div className="relative bg-transparent">
      {/* Render Particles as the background */}
      <ParticlesComponent />

      {/* Content Wrapper */}
      <div className="relative z-10 text-black dark:text-white">
        <Navbar />
        <Hero
          landingpagetext={landingpagetext[count]}
          count={count}
          setCount={setCount}
        />
        <About />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
