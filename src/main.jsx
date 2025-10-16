import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Lenis from "@studio-freight/lenis";
import './index.css';


// eslint-disable-next-line react-refresh/only-export-components
const Root = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return <App />;
};

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
