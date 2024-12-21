import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent1 = (props) => {
  const [init, setInit] = useState(false);
  const [darkMode, setDarkMode] = useState(
    window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleThemeChange = (e) => setDarkMode(e.matches);
    mediaQuery.addEventListener("change", handleThemeChange);

    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });

    return () => {
      mediaQuery.removeEventListener("change", handleThemeChange);
    };
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 144,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            distance: 150,
            duration: 12,
          },
          grab: {
            distance: 170,
          },
        },
      },
      particles: {
        color: {
          value: darkMode ? "#ffffff" : "#000000", // Change particle color based on dark mode
        },
        links: {
          color: darkMode ? "#ffffff" : "#000000", // Matching link color based on dark mode
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1.2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: 0.3,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [darkMode] // Recalculate options when darkMode changes
  );

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    >
      {init && <Particles id={props.id} init={particlesLoaded} options={options} />}
    </div>
  );
};

export default ParticlesComponent1;
  