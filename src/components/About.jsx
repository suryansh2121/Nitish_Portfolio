import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <motion.h2
        className="text-4xl font-bold mb-6 text-neon"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="max-w-2xl text-lg leading-relaxed opacity-90"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        I’m a passionate software engineer focused on crafting immersive,
        high-performance digital experiences that merge art and technology.
      </motion.p>
    </section>
  );
}
