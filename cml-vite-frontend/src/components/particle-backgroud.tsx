import React from 'react';
import Particles from 'react-tsparticles';

const ParticleBackground: React.FC = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: {
            value: "#0d47a1", // Background color
          },
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 100, // Number of particles
          },
          links: {
            enable: true, // Connect nodes with lines
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
          },
          shape: {
            type: "circle", // Shapes of the nodes
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse", // Repulse on hover
            },
            onClick: {
              enable: true,
              mode: "push", // Add more nodes on click
            },
          },
        },
      }}
    />
  );
};

export default ParticleBackground;
