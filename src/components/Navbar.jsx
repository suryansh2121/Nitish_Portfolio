import React from "react";

const Navbar = () => {
  const handleScroll = (id) => {
    const target = document.getElementById(id);
    if (target) {
      if (window.lenis) {
        window.lenis.scrollTo(target); // smooth scroll via Lenis
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 w-full p-4 flex justify-center gap-6 z-50 backdrop-blur-md bg-black/30 text-white">
      <button onClick={() => handleScroll("hero")} className="hover:text-purple-400 transition">Home</button>
      <button onClick={() => handleScroll("about")} className="hover:text-purple-400 transition">About</button>
      <button onClick={() => handleScroll("projects")} className="hover:text-purple-400 transition">Projects</button>
      <button onClick={() => handleScroll("contact")} className="hover:text-purple-400 transition">Contact</button>
    </nav>
  );
};

export default Navbar;
