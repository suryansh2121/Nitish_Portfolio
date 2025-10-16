import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Lenis from "@studio-freight/lenis";
import "./index.css";

const Root = () => {
  useEffect(() => {
    const lenis = new Lenis();
    window.lenis = lenis; // 👈 This makes Lenis accessible in Navbar.js

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Optional cleanup (good practice)
    return () => {
      window.lenis = null;
    };
  }, []);

  return <App />;
};

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
