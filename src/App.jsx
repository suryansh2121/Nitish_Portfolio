import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/ProjectCard";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="font-sans text-white bg-gradient-to-r from-[#0d0153] to-black">      
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
