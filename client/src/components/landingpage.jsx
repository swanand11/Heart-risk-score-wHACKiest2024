import React, { useState, useEffect } from "react";
import ParticlesComponent from "./bg";
import ParticlesComponent1 from "./bg2";
import Hero from "./hero/hero";
import Footer from "./footer/Footer";
import Testimonial from "./Testimonial/Testimonial";
import Contact from "./contact/Contact";
import About from "./About/About";
import Navbar from "./Navbar/Navbar";
import { useTheme } from "../components/ThemeContext";
const LandingPage = () => {
  const landingpagetext = [
    { text: "A healthy heart is the key to happiness in life" },
    { text: "With a healthy heart, the beat goes on." },
    { text: "The disease of the heart is worse than the disease of the body." },
  ];

  const [count, setCount] = useState(0);

  const { theme } = useTheme(); 

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className={`relative bg-transparent ${theme === "dark" ? "dark" : ""}`}>
     {theme === "dark" ? <ParticlesComponent /> : <ParticlesComponent1 />} 
      <div className={`relative z-10 text-black ${theme === "dark" ? "text-white" : "text-black"}`}>
        <Navbar theme={theme} />
        <Hero
          landingpagetext={landingpagetext[count]}
          count={count}
          setCount={setCount}
          theme={theme}
        /> <br/> <br/>
        <About theme={theme} />
        <br/><br/>
        <Testimonial theme={theme} />
        <br/>
        <Contact theme={theme} />
        <Footer theme={theme} />
      </div>
    </div>
  );
};

export default LandingPage;
