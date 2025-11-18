import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";


const projects = [
  {
    title: "Mini E-Commerce Backend",
    desc: "This project is a mini e-commerce backend system built with clean REST APIs, MongoDB & SQL database, and role-based authentication. It supports essential online shopping features like user management, cart handling, order processing, and customer-admin chat.",
    color: "purple",
    link: "https://github.com/flipflopbackend/ecommerce.git",
  },
  {
    title: "Whatsapp Clone Backend",
    desc: "WhatsApp-like project featuring user login via phone number OTP using Twilio, SQL database, Socket.IO for real-time messaging, personal and group chats, add/remove contacts and block/unblock numbers, integrates Kafka to manage message processing.",
    color: "blue",
    link: "https://github.com/sanjy0511/backend-whatsapp.git",
  },
  {
    title: "Login and Register",
    desc: " created a login and registration using the expressjs with proper validation using Joi. OTP verification via email, file upload with resize using Sharp package, and logging with Winston. multiple authentication, normal login, Google login, LinkedIn login, and Facebook login.",
    color: "orange",
    link: "https://github.com/flipflopbackend/flip_flop.git",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-16 bg-gradient-to-b from-purple-50 to-blue-50 dark:bg-gradient-to-b dark:from-[#0f0a20] dark:to-[#120b2c] transition-all duration-500"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-10"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-300 dark:to-blue-300">
          My Projects
        </span>
      </motion.h1>

      {/* cards containers */}

      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, translateY: -10 }}
            className={`p-6 rounded-2xl transition-all duration-300 border shadow-lg hover:shadow-xl 
            
            bg-white/90 border-gray-200 shadow-gray-300/50 dark:bg-[#191332]/60 dark:border-[#352f60] dark:shadow-[0_0_25px_rgba(120,0,255,0.45)]
            `}
          >
            <div
              className={`h-2 rounded-full mb-4 
              ${p.color === "purple" ? "bg-purple-500" : ""}
              ${p.color === "blue" ? "bg-blue-500" : ""}
              ${p.color === "orange" ? "bg-orange-500" : ""}
              `}
            ></div>
            <h2 className="text-2xl font-bold dark:text-white">{p.title}</h2>
            <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 opacity-90">
              {p.desc}
            </p>
            <a
              href={p.link}
              className="flex items-center gap-2 mt-5 underline text-gray-800 dark:text-gray-200 hover:text-purple-500 dark:hover:text-purple-300 transition-all"
              target="_blank"
            >
              <FaGithub size={20} />
              Github
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
