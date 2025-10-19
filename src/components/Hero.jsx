import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Environment } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Typewriter from "./Typewriter";

// Utility to detect touch devices
const isTouchDevice = () => {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
};

// Floating Sphere Component
function FloatingSphere({ position, color, speed, scale }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    ref.current.position.y =
      Math.sin(clock.getElapsedTime() * speed) * 0.5 + position[1];
  });

  return (
    <Sphere ref={ref} args={[scale, 32, 32]} position={position}>
      <meshStandardMaterial emissive={color} color={color} emissiveIntensity={2} />
    </Sphere>
  );
}

// Custom Smooth Cursor
function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const smoothX = useSpring(cursorX, { stiffness: 50, damping: 10 });
  const smoothY = useSpring(cursorY, { stiffness: 50, damping: 10 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(isTouchDevice());
    if (!isTouch) {
      const moveCursor = (e) => {
        cursorX.set(e.clientX - 25);
        cursorY.set(e.clientY - 25);
      };
      window.addEventListener("mousemove", moveCursor);
      return () => window.removeEventListener("mousemove", moveCursor);
    }
  }, [cursorX, cursorY, isTouch]);

  if (isTouch) return null;

  return (
    <>
      <motion.div
        className="fixed w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-purple-500/30 blur-2xl sm:blur-3xl mix-blend-screen pointer-events-none z-50"
        style={{ x: smoothX, y: smoothY }}
      />
      <motion.div
        className="fixed w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 shadow-2xl pointer-events-none z-50"
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
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [isTouch, setIsTouch] = useState(isTouchDevice());

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    const handleTouchCheck = () => {
      setIsTouch(isTouchDevice());
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("touchstart", handleTouchCheck);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("touchstart", handleTouchCheck);
    };
  }, []);

  // Calculate responsive sphere positions and scale
  const isMobile = dimensions.width < 640;
  const sphereScale = isMobile ? 0.2 : 0.3;
  const spherePositions = [
    [isMobile ? 0.8 : 1, isMobile ? 0.8 : 1, 0],
    [isMobile ? -1.2 : -1.5, isMobile ? -0.4 : -0.5, 0],
    [isMobile ? 0 : 0, isMobile ? -0.8 : -1, -1],
  ];

  // Adjust camera FOV and position
  const cameraFov = isMobile ? 75 : 60;
  const cameraPosition = isMobile ? [0, 0, 3] : [0, 0, 4];

  // Adjust Bloom for performance
  const bloomHeight = isMobile ? 200 : 300;

  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center bg-black text-white !mb-0"
      style={{ minHeight: "100vh", touchAction: "auto" }}
    >
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0" style={{ touchAction: "auto" }}>
        <Canvas
          className="!absolute !inset-0"
          camera={{ position: cameraPosition, fov: cameraFov }}
          gl={{ antialias: true }}
          style={{ touchAction: isTouch ? "auto" : "none" }}
        >
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <FloatingSphere
            position={spherePositions[0]}
            color="#8b5cf6"
            speed={1.5}
            scale={sphereScale}
          />
          <FloatingSphere
            position={spherePositions[1]}
            color="#ec4899"
            speed={2}
            scale={sphereScale}
          />
          <FloatingSphere
            position={spherePositions[2]}
            color="#22d3ee"
            speed={1.8}
            scale={sphereScale}
          />
          <Environment preset="city" />
          <EffectComposer>
            <Bloom
              luminanceThreshold={0.3}
              luminanceSmoothing={0.9}
              height={bloomHeight}
            />
          </EffectComposer>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={!isTouch}
            enableDamping={true}
          />
        </Canvas>
      </div>

      {/* Overlay Content */}
      <motion.div
        className="z-10 px-4 sm:px-6 md:px-10 text-left mx-auto mt-16 sm:mt-0 max-w-[90vw] sm:max-w-3xl"
        initial={{ opacity: 0, x: -80, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-400 drop-shadow-lg"
        >
          Nitish Kumar
        </motion.h1>
      </motion.div>

      <motion.p
        className="text-sm sm:text-base md:text-lg lg:text-2xl text-center text-gray-300 mt-4 z-10 px-4 max-w-[90vw]"
        initial={{ opacity: 0, y: 60, x: 40 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <Typewriter
          words={[
            "Graphic Designer",
            "Video Editor",
            "Motion Designer",
            "Animator",
          ]}
          typingSpeed={100}
          deletingSpeed={60}
          delayBetweenWords={1200}
          className="text-teal-400"
        />
      </motion.p>

      {/* Extra scroll space */}
      <div className="h-[10vh] sm:h-[15vh] md:h-[10vh]" />

      <CustomCursor />
    </section>
  );
}