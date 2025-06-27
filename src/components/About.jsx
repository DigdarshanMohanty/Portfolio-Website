import React from "react";
import Navbar from "./shared/Navbar";

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

  return (
    <>
      <main className="max-w-6xl mx-auto px-4 font-mono text-white min-h-screen">
        <div className="flex flex-col md:flex-row gap-12">
          
          {/* About Section */}
          <section className="flex-1">
            <h1 className="text-2xl font-bold mb-6">About</h1>
            <p className="leading-relaxed text-gray-300">
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

          {/* Experience Section */}
          <section className="flex-1">
            <h2 className="text-2xl font-bold mb-6">Experience</h2>
            {experiences.map((exp, i) => (
              <div key={i} className="mb-8">
                <h3 className="font-bold text-lg">{exp.title}</h3>
                <p className="text-amber-600 text-sm">{exp.date}</p>
                <p className="mt-3 whitespace-pre-line text-gray-400">{exp.desc}</p>
              </div>
            ))}
          </section>
          
        </div>
      </main>
    </>
  );
}
