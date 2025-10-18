import { motion } from "framer-motion";
import { BiLogoGmail } from "react-icons/bi";
import { FaBehance, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const socials = [
    {
      name: "WhatsApp",
      icon: <FaWhatsapp size={28} />,
      link: "https://wa.me/917900509685",
      color: "hover:text-green-400",
      glow: "hover:shadow-[0_0_20px_#25D366]",
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={28} />,
      link: "https://instagram.com/im_niteeshkr",
      color: "hover:text-pink-400",
      glow: "hover:shadow-[0_0_20px_#E1306C]",
    },
    {
      name: "Behance",
      icon: <FaBehance size={28} />,
      link: "https://behance.net/yourusername",
      color: "hover:text-blue-400",
      glow: "hover:shadow-[0_0_20px_#1769FF]",
    },
    {
      name: "Email",
      icon: <BiLogoGmail size={28} />,
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=niteeshdarji012@gmail.com",
      color: "hover:text-yellow-400",
      glow: "hover:shadow-[0_0_20px_#FFD43B]",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center bg-black text-white"
    >
      <motion.h2
        className="text-4xl font-bold mb-6 text-purple-400"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Let’s Connect
      </motion.h2>

      <motion.p
        className="opacity-80 mb-8 max-w-md"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Open for collaborations, creative projects, or just a friendly chat
        let’s connect and create something awesome together!
      </motion.p>

      <motion.div
        className="flex flex-wrap gap-6 justify-center mt-4"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
      >
        {socials.map((social, index) => (
          <motion.a
            key={index}
            href={social.link}
            aria-label={social.name}
            target="_blank"
            rel="noopener noreferrer"
            className={`transition duration-300 ${social.color}`}
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <div
              className={`p-3 rounded-full bg-zinc-900 shadow-[0_0_10px_#6b21a8] ${social.glow} transition-all duration-300`}
            >
              {social.icon}
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
