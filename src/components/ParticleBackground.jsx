import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log("Particles Loaded", container);
  }, []);

  return (
    init && (
      <div className="fixed inset-0 -z-10 h-screen w-full">
          <Particles
          id="tsparticles"
          className="pointer-events-none"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
          options={{
            fullScreen: { enable: true, zIndex: -6 },
            background: { color: { value: "transparent" } },
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: { enable: true, mode: "grab" },
                onClick: { enable: true, mode: "push" },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 140,
                  links: { opacity: 0.5 },
                },
                push: { quantity: 2 },
              },
            },
            particles: {
              number: {
                value: 80,
                density: { enable: true, area: 800 },
              },
              color: { value: "#ffffff" }, // Bright against dark bg
              shape: { type: "circle" },
              opacity: {
                value: 0.5,
                random: true,
                animation: {
                  enable: true,
                  speed: 0.2,
                  minimumValue: 0.3,
                  sync: false,
                },
              },
              size: {
                value: { min: 1, max: 3 },
                random: true,
              },
              links: {
                enable: true,
                distance: 130,
                color: "#65DEF1", // Cyan links look gorgeous on dark
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 0.4,
                direction: "none",
                random: false,
                straight: false,
                outModes: { default: "bounce" },
              },
            },
            detectRetina: true,
          }}
        />
      </div>
    )
  );
}
