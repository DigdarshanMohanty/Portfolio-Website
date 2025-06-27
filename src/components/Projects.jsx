import { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      year: "2025",
      title: "MovieMart",
      desc: "Integrated OMDB API to fetch live movie data including poster, title, release year, and IMDb rating . Card-style movie grid UI with responsive layout",
    },
    {
      year: "2025",
      title: "Blog Website",
      desc: "Full-stack blog site supporting CRUD operations with clean routing and EJS-based dynamic views.",
    },
    {
      year: "2025",
      title: "SMARTBIZ",
      desc: "Designed a business management app using Angular with modular components for Admin and Employee roles.Admins can manage products, customers, and view transactions; employees can handle sales and update stock . Implemented routing, form validation, and responsive UI for smooth navigation and usability",
    },
    {
      title: "Youtube UI Clone",
      desc: "Replicated UI using HTML , CSS and JavaScript . Implemented responsive design with media queries and flexbox for optimal viewing on all devices",
      year: "2024",
    }
  ];

  const containerRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const children = container.querySelectorAll(".project-item");
      if (children.length > 1) {
        const top = children[0].offsetTop;
        const bottom = children[children.length - 1].offsetTop;
        setLineHeight(bottom - top + 60); // 60px to extend to last item
      }
    }
  }, []);

  const textVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
        id="projects"
        className="relative px-6 text-white font-mono bg-transparent dark:bg-transparent min-h-screen py-16"
      >
      <h2 className="text-4xl font-bold mb-16 text-center underline underline-offset-8 decoration-amber-500">
        Projects Timeline
      </h2>

      <div ref={containerRef} className="relative max-w-5xl mx-auto">
        {/* Dynamic vertical line */}
        <div
          className="absolute left-1/2 w-1 bg-amber-500 transform -translate-x-1/2 z-0"
          style={{ height: `${lineHeight}px`, top: "0px" }}
        />

        {projects.map((proj, i) => {
          const ref = useRef(null);
          const inView = useInView(ref, { margin: "-100px 0px -100px 0px" });
          const controls = useAnimation();

          useEffect(() => {
            if (inView) controls.start("visible");
          }, [inView, controls]);

          return (
            <div key={i} className="project-item relative mb-20 z-10">
              {/* Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-500 rounded-full z-10" />

              {/* Card */}
              <div
                className={`
                  mt-4 p-6 rounded-xl bg-zinc-800 shadow-lg max-w-md
                  ${i % 2 === 0 ? "ml-auto text-left" : "mr-auto text-left"}
                `}
              >
                <motion.time
                  ref={ref}
                  initial="hidden"
                  animate={controls}
                  variants={textVariant}
                  className="block text-sm text-amber-400 mb-1"
                >
                  {proj.year}
                </motion.time>

                <motion.h3
                  initial="hidden"
                  animate={controls}
                  variants={textVariant}
                  className="text-xl font-bold"
                >
                  {proj.title}
                </motion.h3>

                <motion.p
                  initial="hidden"
                  animate={controls}
                  variants={textVariant}
                  className="text-gray-300 mt-1"
                >
                  {proj.desc}
                </motion.p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
