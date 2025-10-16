import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <motion.h2
        className="text-3xl font-bold mb-6 text-neon"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Let’s Connect
      </motion.h2>

      <p className="opacity-80 mb-6">
        Open to collaborations, projects, or just a friendly chat.
      </p>

      <a
        href="mailto:your@email.com"
        className="px-6 py-3 bg-neon text-black rounded-full font-semibold shadow-glow hover:scale-105 transition"
      >
        Say Hello 👋
      </a>
    </section>
  );
}
