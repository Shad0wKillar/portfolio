import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "next-themes";

const ParticlesBg = () => {
  const [init, setInit] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  const isDark = resolvedTheme === "dark";
  const particleColor = isDark ? "#05ce91" : "#008c8c";

  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 z-[1] pointer-events-none"
      options={{
        background: {
          color: { value: "transparent" },
        },
        fpsLimit: 60,
        // I set detectsOn to "window" so mouse events work despite pointer-events-none
        interactivity: {
          detectsOn: "window",
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
            resize: {
              enable: true,
            },
          },
          modes: {
            grab: {
              distance: 180,
              links: {
                opacity: 0.6,
                color: particleColor,
              },
            },
            push: {
              quantity: 2,
            },
          },
        },
        particles: {
          color: { value: particleColor },
          links: {
            color: particleColor,
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
          },
          number: {
            density: { enable: true },
            value: 50,
          },
          opacity: { value: 0.5 },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBg;
