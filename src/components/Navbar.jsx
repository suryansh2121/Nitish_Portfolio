const Navbar = () => (
  <nav className="fixed top-0 w-full p-4 flex justify-center gap-6  z-50">
    <a href="#hero" className="hover:text-purple-400 transition">Home</a>
    <a href="#about" className="hover:text-purple-400 transition">About</a>
    <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
    <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
  </nav>
);

export default Navbar;
