import { useState, useEffect } from "react";
import video1 from "../../assets/homepage_video.mp4";

const HeroSection = () => {
  const [darkMode, setDarkMode] = useState(
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleThemeChange = (e) => setDarkMode(e.matches);
    mediaQuery.addEventListener("change", handleThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleThemeChange);
    };
  }, []);

  return (
    <div className={`relative flex flex-col items-center justify-center h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'} text-white`}>
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={`absolute inset-0 ${darkMode ? 'bg-black bg-opacity-70' : 'bg-black bg-opacity-50'}`}></div> {/* Overlay */}
      </div>

      <div className="relative z-10 text-center">
        <h1 className={`text-4xl sm:text-6xl lg:text-7xl tracking-wide ${darkMode ? 'text-white' : 'text-black'}`}>
          <strong> 
            <span className={`bg-gradient-to-r ${darkMode ? 'from-blue-400 to-red-600' : 'from-blue-500 to-red-400'} text-transparent bg-clip-text`}>
              Kardia
            </span>
          </strong>
          <span className={`${darkMode ? 'text-white' : 'text-black'} text-transparent bg-clip-text`}>
            {" "}
            Your Personalized Heart Assistant
          </span>
        </h1>
        <p className={`mt-10 text-lg max-w-4xl mx-auto ${darkMode ? 'text-neutral-300' : 'text-neutral-800'}`}>
          <strong>
            This AI solution helps monitor heart and ECG health in real time
            using data from existing devices. It detects problems early,
            reduces the need for regular hospital visits, and improves health
            outcomes by giving timely alerts.
          </strong>
        </p>
        <div className="flex justify-center my-10">
          <a
            href="#"
            className={`bg-gradient-to-r ${darkMode ? 'from-orange-600 to-orange-900' : 'from-orange-500 to-orange-800'} py-3 px-4 mx-3 rounded-md`}
          >
            Start for free
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
