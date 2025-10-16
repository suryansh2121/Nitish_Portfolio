import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Stars, Environment } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";
import Typewriter from "./Typewriter";

// Floating Sphere Component
function FloatingSphere({ position, color, speed }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    ref.current.position.y =
      Math.sin(clock.getElapsedTime() * speed) * 0.5 + position[1];
  });

  return (
    <Sphere ref={ref} args={[0.3, 32, 32]} position={position}>
      <meshStandardMaterial
        emissive={color}
        color={color}
        emissiveIntensity={2}
      />
    </Sphere>
  );
}

// Custom Smooth Cursor
function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const smoothX = useSpring(cursorX, { stiffness: 50, damping: 10 });
  const smoothY = useSpring(cursorY, { stiffness: 50, damping: 10 });

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 25);
      cursorY.set(e.clientY - 25);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Outer Glow */}
      <motion.div
        className="fixed w-24 h-24 rounded-full bg-purple-500/30 blur-3xl mix-blend-screen pointer-events-none z-50"
        style={{ x: smoothX, y: smoothY }}
      />
      {/* Core Cursor */}
      <motion.div
        className="fixed w-8 h-8 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 shadow-2xl pointer-events-none z-50"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [1, 0.9, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 4] }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <FloatingSphere position={[1, 1, 0]} color="#8b5cf6" speed={1.5} />
          <FloatingSphere
            position={[-1.5, -0.5, 0]}
            color="#ec4899"
            speed={2}
          />
          <FloatingSphere position={[0, -1, -1]} color="#22d3ee" speed={1.8} />

          <Environment preset="city" />
          <EffectComposer>
            <Bloom
              luminanceThreshold={0.3}
              luminanceSmoothing={0.9}
              height={300}
            />
          </EffectComposer>

          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>

      {/* Overlay Content */}
      <motion.div
        className="z-10 px-10 text-left top-1/2 transform -translate-y-1/2  mb-25 max-w-3xl"
        initial={{ opacity: 0, x: -80, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <motion.h1 className="text-7xl text-left font-extrabold mb-4 bg-clip-text drop-shadow-glow">
          Nitish Kumar
        </motion.h1>
      </motion.div>
      <motion.p
        className="text-lg text-center text-gray-300 z-1"
        initial={{ opacity: 0, y: 60, x: 40 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <Typewriter
          words={[
            " Graphic Designer",
            "Video Editor",
            "Motion Designer",
            "Animator",
          ]}
          typingSpeed={100}
          deletingSpeed={60}
          delayBetweenWords={1200}
          className="text-2xl text-teal-400"
        />
      </motion.p>

      <CustomCursor />
    </section>
  );
}
