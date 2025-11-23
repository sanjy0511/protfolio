import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-scroll";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur bg-white/50 dark:bg-gray-900/50 shadow z-50">
      <div className="w-full max-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold dark:text-white tracking-wide">
          Portfolio
        </h1>
        <div className="hidden md:flex gap-10">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <Link
              key={item}
              to={item}
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer text-gray-700  dark:text-gray-300 hover:text-blue-500 text-lg transition"
            >
              {item.toUpperCase()}
            </Link>
          ))}
        </div>
        <button
          onClick={() => setTheme(theme == "light" ? "dark" : "light")}
          className="text-2xl text-gray-700 dark:text-gray-200"
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
