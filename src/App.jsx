import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Tsparticles from "./components/tsparticles";

function App() {
  return (
    <div>
      <Tsparticles />
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
