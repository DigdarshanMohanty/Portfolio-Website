import React from "react";
import Navbar from "./shared/Navbar";
import { FaReact, FaNodeJs, FaAws, FaGitAlt } from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiSpringboot,
  SiAngular,
  SiJavascript,
} from "react-icons/si";

export default function About() {
  const experiences = [
    {
      title: "Intern under IBM instructor",
      date: "Jun 2025 - present",
      desc: `Developing responsive frontends using Angular 15, with modular components, routing, and form handling. 
Learning Spring Boot for building robust RESTful APIs, backend logic, and database integration using JPA/Hibernate.`,
    },
    {
      title: "Intern at Ingenious-Tech World",
      date: "Jun 2024 - Aug 2024",
      desc: `Built and deployed a full-stack web application using a multi-VPC architecture. 
Practiced industry-level cloud deployment workflows including backend/frontend separation, load-balanced
access, and private path routing.`,
    },
  ];

  const techStackIcons = [
    { icon: <FaReact size={30} className="text-cyan-400" />, label: "React" },
    { icon: <SiAngular size={30} className="text-red-500" />, label: "Angular" },
    { icon: <SiSpringboot size={30} className="text-green-500" />, label: "Spring Boot" },
    { icon: <FaNodeJs size={30} className="text-green-400" />, label: "Node.js" },
    { icon: <SiTailwindcss size={30} className="text-sky-400" />, label: "Tailwind" },
    { icon: <SiMysql size={30} className="text-blue-300" />, label: "MySQL" },
    { icon: <SiMongodb size={30} className="text-green-600" />, label: "MongoDB" },
    { icon: <FaAws size={30} className="text-orange-400" />, label: "AWS" },
    { icon: <FaGitAlt size={30} className="text-orange-600" />, label: "Git" },
    { icon: <SiJavascript size={30} className="text-yellow-300" />, label: "JavaScript" },
  ];

  return (
    <>
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-mono text-white min-h-screen">
        
        {/* About + Experience Section */}
        <div className="flex flex-col lg:flex-row gap-12 relative">
          {/* About */}
          <section className="flex-1">
            <h1 className="text-3xl font-bold mb-6">About</h1>
            <p className="leading-relaxed text-gray-300 text-base sm:text-lg">
              I'm a 3rd Year Computer Science Student at Silicon University with a passion for Web Development.
              Also explored Cloud computing platforms such as AWS and try to go in depth with each tech I come across
              and build some projects out of it.
              <br /><br />
              Beyond Tech, I love to participate in debate competitions and Model UN Conferences
              (just to chill out my brain -_-)
              <br /><br />
              Currently falling in love with DSA ❤️
            </p>
          </section>

          {/* Experience */}
          <section className="flex-1">
            <h2 className="text-3xl font-bold mb-6">Experience</h2>
            {experiences.map((exp, i) => (
              <div key={i} className="mb-8">
                <h3 className="font-bold text-xl">{exp.title}</h3>
                <p className="text-amber-600 text-sm">{exp.date}</p>
                <p className="mt-3 whitespace-pre-line text-gray-400 text-base">{exp.desc}</p>
              </div>
            ))}
          </section>

          {/* Scroll Cue for Desktop (Top Right) */}
          <div className="hidden lg:block absolute top-0 right-0">
            <a
              href="#tech-stack"
              className="text-sm text-gray-400 hover:text-white flex items-center gap-1 group transition"
              aria-label="Scroll to Tech Stack"
            >
              <span className="group-hover:underline">Tech I Use</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 group-hover:translate-y-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll Cue for Mobile (Centered Bounce) */}
        <div className="mt-10 flex flex-col items-center justify-center lg:hidden">
          <span className="text-sm text-gray-400 mb-2">See the tech I use ↓</span>
          <a
            href="#tech-stack"
            aria-label="Scroll to Tech Stack"
            className="text-gray-400 hover:text-white transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        {/* Tech Stack Section */}
        <section id="tech-stack" className="mt-16 pb-20">
          <h2 className="text-3xl font-semibold mb-8 text-center">Tech Stack I Use</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center">
            {techStackIcons.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-sm text-gray-400 hover:text-white transition duration-300"
              >
                <div className="flex items-center justify-center h-12">{tech.icon}</div>
                <span className="mt-2 text-xs sm:text-sm">{tech.label}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
