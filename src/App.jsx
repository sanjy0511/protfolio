import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Xoxo from "./components/Xoxo";
import StonePaperGame from "./components/StoneGame";


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
        <Route path="/stone-game" element={<StonePaperGame/>}/>
      </Routes>
    </>
  );
}

export default App;
