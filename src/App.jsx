import ParticleBackground from "./components/ParticleBackground";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemeToggle from "./components/shared/Themetoggle";
import Navbar from "./components/shared/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Projects from "./components/Projects";

// App.jsx

export default function App() {
  return (
    <div className="relative z-0 font-mono transition-colors duration-300 text-black dark:bg-[#0d0d0d] dark:text-white">
      <ParticleBackground /> {/* This should be just inside the root */}
      <Router>
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/projects" element={<Projects />} />            
          </Routes>
        </main>
      </Router>
    </div>
  );
}
