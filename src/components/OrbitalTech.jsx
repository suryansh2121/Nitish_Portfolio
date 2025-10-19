import { Html, Sphere } from "@react-three/drei";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import {
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiCanva,
} from "react-icons/si";

export default function OrbitalTech() {
  const orbitRef = useRef();
  const [hovered, setHovered] = useState(null);

  const techs = [
    { icon: <SiAdobeaftereffects size={40} color="#FF61F6" />, name: "After Effects", description: "Motion graphics & visual effects" },
    { icon: <SiAdobeillustrator size={40} color="#FF9A00" />, name: "Illustrator", description: "Vector graphics design" },
    { icon: <SiAdobeindesign size={40} color="#FF3366" />, name: "InDesign", description: "Layout & publishing" },
    { icon: <SiAdobephotoshop size={40} color="#00A8FF" />, name: "Photoshop", description: "Photo editing & design" },
    { icon: <SiAdobepremierepro size={40} color="#9900FF" />, name: "Premiere Pro", description: "Video editing" },
    { icon: <SiCanva size={40} color="#00C4CC" />, name: "Canva", description: "Graphic design made simple" },
  ];

  const radius = 4;
  const segments = 64;

  useFrame(({ clock, mouse }) => {
    if (orbitRef.current) {
      orbitRef.current.rotation.z = clock.getElapsedTime() * 0.15 + mouse.x * 0.3;
      orbitRef.current.rotation.x = mouse.y * 0.1;
    }
  });

  return (
    <>
      {/* Central Core */}
      <Sphere args={[0.7, segments, segments]}>
        <meshStandardMaterial color="#8b5cf6" emissive="#a855f7" emissiveIntensity={1.2} toneMapped={false} />
      </Sphere>

      {/* Orbiting Icons */}
      <group ref={orbitRef}>
        {techs.map((tech, i) => {
          const angle = (i / techs.length) * Math.PI * 2;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <group key={i}>
              {/* Line */}
              <line>
                <bufferGeometry>
                  <bufferAttribute attach="attributes-position" count={2} array={new Float32Array([0, 0, 0, x, y, 0])} itemSize={3} />
                </bufferGeometry>
                <lineBasicMaterial color="#fff" transparent opacity={0.4} linewidth={2} />
              </line>

              {/* Icon */}
              <Html position={[x, y, 0]} style={{ transform: "translate(-50%, -50%)", pointerEvents: "auto", cursor: "pointer" }}
                onPointerOver={() => setHovered(i)}
                onPointerOut={() => setHovered(null)}
              >
                <div style={{ transform: `scale(${hovered === i ? 1.2 : 1})`, transition: "transform 0.2s ease", position: "relative", display: "inline-block" }}>
                  {tech.icon}
                  {hovered === i && (
                    <div style={{
                      position: "absolute",
                      top: "50px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "rgba(0,0,0,0.8)",
                      color: "#fff",
                      padding: "8px 12px",
                      borderRadius: "8px",
                      fontSize: "12px",
                      textAlign: "center",
                      whiteSpace: "nowrap",
                      zIndex: 10,
                    }}>
                      <strong>{tech.name}</strong><br />{tech.description}
                    </div>
                  )}
                </div>
              </Html>
            </group>
          );
        })}
      </group>
    </>
  );
}
