import React from "react";
import { FaCode, FaRocket, FaUserTie } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-28 px-6 dark:bg-black bg-gray-50">
      <h2 className="text-5xl font-extrabold text-center dark:text-white">
        About <span className="text-blue-500">Me</span>
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mt-16">
        <div className="p-8 rounded-2xl bg-white dark:bg-gray-900 shadow-xl border-l-4 border-blue-500">
          <FaUserTie className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-2xl font-bold mb-2 dark:text-white">Who I Am</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            I am passionate MERN developer wo loves turning ideas into
            real-world applications with clean and scalable code.
          </p>
        </div>
        <div className="p-8 rounded-2xl bg-white dark:bg-gray-900 shadow-xl border-l-4 border-purple-500">
          <FaCode className="text-4xl text-purple-500 mb-4" />
          <h3 className="text-2xl font-bold mb-2 dark:text-white">What I Do</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            I build modern UI, powerful backend systems,APIs automation tools
            and trading related projects.
          </p>
        </div>
        <div className="p-8 rounded-2xl bg-white dark:bg-gray-900 shadow-xl border-l-4 border-pink-500">
          <FaRocket className="text-4xl text-pink-500 mb-4" />
          <h3 className="text-2xl font-bold mb-2 dark:text-white">Goals</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            My goal is to create fast, beautiful, and impactful web applications
            that stand out and deliver value.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
