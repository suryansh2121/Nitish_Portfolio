import { useScroll, motion } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 h-[4px] bg-neon origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
