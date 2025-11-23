import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Xoxo from "./components/Xoxo";
function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <About />
              <Projects />
              <Contact />
            </>
          }
        />

        <Route path="/xoxo" element={<Xoxo />} />
      </Routes>
    </>
  );
}

export default App;
