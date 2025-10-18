import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-visible px-6 text-center bg-black "
    >
      {/* Floating Glow Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/30 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-600/30 rounded-full blur-[100px] delay-2000"></div>

      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 opacity-30">
        <svg width="500" height="500" viewBox="0 0 200 200" fill="none">
          <path
            fill="#a855f7"
            fillOpacity="0.15"
            d="M44.7,-74.5C58.8,-67.5,71.4,-56.8,78.2,-43.2C85,-29.6,86,-14.8,84.4,0.2C82.7,15.2,78.5,30.4,70.2,43.8C61.9,57.2,49.5,68.8,36.1,75.1C22.7,81.4,8.3,82.5,-6.3,81.2C-20.9,79.9,-35.7,76.2,-48.4,68.1C-61.1,60,-71.7,47.5,-76.6,33.4C-81.5,19.3,-80.7,3.5,-77.8,-12.3C-74.9,-28.1,-69.9,-43.9,-60.2,-57.5C-50.5,-71.1,-36.2,-82.5,-20.9,-84.9C-5.6,-87.3,10.8,-80.7,25.6,-75.2C40.4,-69.7,53.5,-65.4,44.7,-74.5Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      {/* Content */}
      <motion.h2
        className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(168,85,247,0.7)]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="max-w-2xl text-lg leading-relaxed text-gray-300 opacity-90"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
      I’m a{" "}
<span className="text-purple-400 font-semibold">Graphic Designer & Video Editor</span>{" "}
passionate about crafting impactful visual stories that connect with people. I love blending{" "}
<span className="text-pink-400">creativity</span> and{" "}
<span className="text-cyan-400">strategy</span> to build strong{" "}
<span className="text-yellow-400">brands</span> and deliver designs that inspire and engage. Every frame I design and every cut I make aims to tell a{" "}
<span className="text-blue-400">meaningful story</span>.
      </motion.p>

      <motion.div
        className="mt-10 flex gap-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <a
          href="#projects"
          className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:scale-105 transition-transform shadow-[0_0_20px_rgba(236,72,153,0.5)]"
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
    </section>
  );
}
