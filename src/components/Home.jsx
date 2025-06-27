import { FaGithub, FaLinkedin, FaEnvelope, FaMugHot } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <section className="relative z-10 flex flex-col justify-center items-center text-white px-6 font-mono h-full py-10">
      <div className="text-center flex flex-col items-center gap-10 mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Hey, I'm&nbsp;
          <span className="text-yellow-400">
            <Typewriter
              words={[
                "Digdarshan Mohanty",
                "a Web Developer",
                "a Backend Developer",
                "a Curious Learner",
                "Digdarshan Mohanty",
              ]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1200}
            />
          </span>
        </h1>

        <p className="text-md sm:text-lg text-gray-300 max-w-2xl mx-auto mt-4 leading-relaxed">
          Code is like humor
          <br />
          When you have to explain it, it's bad
          <FaMugHot className="inline text-orange-400 ml-4 mb-1" />
        </p>
      </div>

      <div className="px-6 sm:px-12 py-10 w-full max-w-2xl text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 underline underline-offset-8 decoration-[#65DEF1]">
          Connect with Me
        </h2>

        <div className="flex justify-center gap-8 flex-wrap text-sm sm:text-base">
          <a
            href="https://github.com/DigdarshanMohanty"
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center transition hover:scale-105"
          >
            <FaGithub className="text-3xl mb-1 group-hover:text-pink-400" />
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/digdarshan-mohanty-907635294"
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center transition hover:scale-105"
          >
            <FaLinkedin className="text-3xl mb-1 group-hover:text-blue-400" />
            LinkedIn
          </a>

          <a
            href="https://x.com/GlobalViewer0"
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center transition hover:scale-105"
          >
            <SiX className="text-3xl mb-1 group-hover:text-sky-400" />
            X
          </a>

          <a
            href="mailto:digdarshanmohanty1010@gmail.com"
            className="group flex flex-col items-center transition hover:scale-105"
          >
            <FaEnvelope className="text-3xl mb-1 group-hover:text-green-400" />
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
