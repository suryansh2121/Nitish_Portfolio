"use client";

import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Sphere } from "@react-three/drei";
import { useRef, useState } from "react";
import {
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiCanva,
} from "react-icons/si";

export default function About() {
  const techs = [
    { icon: <SiAdobeaftereffects size={40} color="#FF61F6" />, name: "After Effects" },
    { icon: <SiAdobeillustrator size={40} color="#FF9A00" />, name: "Illustrator" },
    { icon: <SiAdobeindesign size={40} color="#FF3366" />, name: "InDesign" },
    { icon: <SiAdobephotoshop size={40} color="#00A8FF" />, name: "Photoshop" },
    { icon: <SiAdobepremierepro size={40} color="#9900FF" />, name: "Premiere Pro" },
    { icon: <SiCanva size={40} color="#00C4CC" />, name: "Canva" },
  ];

  // Orbital Sphere Component
  function OrbitalSphere() {
    const groupRef = useRef();
    const [hovered, setHovered] = useState(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const radius = 4;

    useFrame(({ clock, mouse }) => {
      if (groupRef.current) {
        // Smooth interpolation instead of instant follow (to remove irritation)
        const targetY = clock.getElapsedTime() * 0.2 + mouse.x * 0.3;
        const targetX = mouse.y * 0.2;

        setRotation((prev) => ({
          x: prev.x + (targetX - prev.x) * 0.05,
          y: prev.y + (targetY - prev.y) * 0.05,
        }));

        groupRef.current.rotation.y = rotation.y;
        groupRef.current.rotation.x = rotation.x;
      }
    });

    return (
      <group ref={groupRef}>
       

        {techs.map((tech, i) => {
          const phi = Math.acos(-1 + (2 * i) / techs.length);
          const theta = Math.sqrt(techs.length * Math.PI) * phi;
          const x = radius * Math.cos(theta) * Math.sin(phi);
          const y = radius * Math.sin(theta) * Math.sin(phi);
          const z = radius * Math.cos(phi);

          return (
            <Html
              key={i}
              position={[x, y, z]}
              style={{
                transform: `translate(-50%, -50%) scale(${hovered === i ? 1.2 : 1})`,
                transition: "transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)", // smooth ease-in-out
                pointerEvents: "auto",
                filter: hovered === i ? "drop-shadow(0 0 8px rgba(255,255,255,0.6))" : "none",
              }}
              onPointerOver={() => setHovered(i)}
              onPointerOut={() => setHovered(null)}
            >
              {tech.icon}
            </Html>
          );
        })}
      </group>
    );
  }

  return (
    <section id="about" className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 bg-black text-white gap-10">
      {/* Left: About Content */}
      <div className="flex-1 text-center lg:text-left">
        <motion.h2
          className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-gray-300 text-lg leading-relaxed mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          I’m a{" "}
          <span className="text-purple-400 font-semibold">Graphic Designer & Video Editor</span>{" "}
          passionate about crafting impactful visual stories. I love blending{" "}
          <span className="text-pink-400">creativity</span> and{" "}
          <span className="text-cyan-400">strategy</span> to build strong{" "}
          <span className="text-yellow-400">brands</span> and deliver designs that inspire.
          Every frame I design tells a{" "}
          <span className="text-blue-400">meaningful story</span>.
        </motion.p>

        <motion.div
          className="flex gap-6 flex-wrap justify-center lg:justify-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:scale-105 transition-transform"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-purple-500 text-purple-300 font-medium hover:bg-purple-600/20 transition-all"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Right: 3D Orbital Sphere */}
      <div className="flex-1 w-full h-[500px]">
        <Canvas camera={{ position: [0, 0, 12] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <OrbitalSphere />
        </Canvas>
      </div>
    </section>
  );
}
