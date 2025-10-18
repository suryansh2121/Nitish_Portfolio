import { motion } from "framer-motion";

const projects = [
  { title: "Interactive Dashboard", desc: "Next.js + Three.js + Framer Motion" },
  { title: "3D Portfolio", desc: "Smooth parallax and neon visuals" },
  { title: "AI Visualizer", desc: "Blending data with immersive design" },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center bg-black px-6">
      <motion.h2
        className="text-4xl font-bold mb-10 text-neon"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Featured Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="bg-glass backdrop-blur-lg p-6 rounded-2xl shadow-glow hover:scale-105 transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
            <p className="opacity-80">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
