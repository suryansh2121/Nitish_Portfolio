import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/ProjectCard";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="font-sans text-white bg-gradient-to-r from-[#0d0153] to-black">      
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
