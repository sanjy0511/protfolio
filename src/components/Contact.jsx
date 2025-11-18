import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 dark:bg-gray-800">
      <h2 className="text-4xl font-bold text-center dark:text-white">
        Get In <span className="text-blue-500">Touch</span>
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mt-10">
        <div>
          <h3 className="text-3xl font-semibold dark:text-white mb-6">
            Contact Info
          </h3>
          <div className=" space-y-4 text-gray-700 dark:text-gray-300">
            <p className="flex items-center gap-3 text-lg">
              <FaEnvelope className="text-blue-500" /> sanjaypriyan511@gmail.com
            </p>
            <a
              href="https://www.linkedin.com/in/sanjay-05-priyan/"
              className="flex items-center gap-3 text-lg hover:underline"
            >
              <FaLinkedin className="text-blue-600" />
              LinkedIn Profile
            </a>
            <a
              href="https://github.com/sanjy0511"
              className="flex items-center gap-3 text-lg hover:underline"
            >
              <FaGithub className="text-gray-900 dark:text-white" /> GitHub
              Profile
            </a>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border rounded-lg dark:bg-gray-800"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-lg dark:bg-gray-800"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full p-3 border rounded-lg dark:bg-gray-800"
            />
            <textarea
              rows="5"
              placeholder="message"
              className="w-full p-3 border rounded-lg dark:bg-gray-800"
            ></textarea>

            <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
