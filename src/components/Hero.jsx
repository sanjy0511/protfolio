import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-scroll";
import MernPdf from "../assets/Mern_stack.pdf";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-16 relative bg-white dark:bg-[#0a0a0a] transition-all duration-500"
    >
      {/* light */}
      <div className="absolute w-80 h-80 bg-gradient-to-br from-purple-200 to-blue-200 blur-3xl rounded-full top-20 left-10 opacity-60 dark:opacity-0 transition-all"></div>
      {/* dark */}
      <div className="absolute w-96 h-96 bg-purple-500/20 blur-[110px] rounded-full dark:block hidden top-28 rignt-0"></div>
      <div className="absolute w-96 h-96 bg-purple-500/20 blur-[110px] rounded-full dark:block hidden bottom-20 left-0"></div>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold z-10 text-gray-900 dark:text-white"
      >
        Hello, I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-400 dark:from-purple-400 dark:to-blue-400">
          Sanjay
        </span>
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-xl md:text-3xl mt-3 font-semibold text-gray-700 dark:text-gray-300"
      >
        I'm a{" "}
        <motion.span
          className="ml-2 font-extrabold"
          animate={{
            color: [
              "#a855f7",
              "#3b82f6",
              "#ef4444",
              "#22c55e",
              "eab308",
              "#0ea5e9",
            ],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          MERN Stack Developer
        </motion.span>
      </motion.h2>

      <p className="max-w-xl mt-5 z-10 text-gray-600 dark:text-gray-400 text-center">
        I build world-class full-stack applications with modern UI/UX, smooth
        animations, clean code, and scalable architecture
      </p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex gap-4 mt-8 z-10"
      >
        <Link
          to="projects"
          smooth={true}
          className="cursor-pointer px-6 py-3 rounded-xl bg-purple-600 text-white shadow-lg hover:bg-purple-700 dark:shadow-purple-500/40 transition-all"
        >
          View My Work
        </Link>
        <a
          href={MernPdf}
          download="Mern_stack.pdf"
          className="px-6 py-3 rounded-xl border border-purple-500 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white transition-all"
        >
          Download CV
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
