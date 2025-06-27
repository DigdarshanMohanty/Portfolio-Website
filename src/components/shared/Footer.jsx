import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiX } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-10 text-sm">
        {/* Name + tagline */}
        <div>
          <h3 className="text-xl font-bold text-white mb-2">Digdarshan</h3>
          <p>Frontend & Backend Developer — blending creativity with code.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:text-pink-400">About</a></li>
            <li><a href="#projects" className="hover:text-pink-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-pink-400">Contact</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-white font-semibold mb-3">Connect</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <FaGithub className="text-lg" />
              <a href="https://github.com/DigdarshanMohanty" target="_blank" rel="noreferrer" className="hover:text-blue-400">GitHub</a>
            </li>
            <li className="flex items-center gap-2">
              <FaLinkedin className="text-lg" />
              <a href="https://linkedin.com/in/digdarshan-mohanty-907635294" target="_blank" rel="noreferrer" className="hover:text-blue-400">LinkedIn</a>
            </li>
            <li className="flex items-center gap-2">
              <SiX className="text-lg" />
              <a href="https://x.com/GlobalViewer0" target="_blank" rel="noreferrer" className="hover:text-blue-400">X</a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-lg" />
              <a href="mailto:digdarshanmohanty1010@gmail.com" className="hover:text-green-400">Email</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs mt-10 text-gray-600 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} Digdarshan. Built with 💻 & ☕ using React & TailwindCSS.
      </div>
    </footer>
  );
}
