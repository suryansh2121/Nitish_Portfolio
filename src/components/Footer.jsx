import { FaGithub, FaLinkedin, FaInstagram, FaBehance } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {

  return (
    <footer className="bg-black text-white py-8  mt-0.5">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 text-center md:text-left gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-purple-400">Niteesh Kumar</h3>
          <p className="text-zinc-400 text-sm mt-1">
            Designing experiences that blend creativity and technology seamlessly.
          </p>
        </motion.div>

        <motion.div
          className="flex gap-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
        </motion.div>
      </div>

      <motion.p
        className="text-zinc-600 text-sm text-center mt-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        © {new Date().getFullYear()} Niteesh Kumar. All rights reserved.
      </motion.p>
    </footer>
  );
}
