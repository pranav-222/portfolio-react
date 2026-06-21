import SplashCursor from "./components/SplashCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <SplashCursor
        DENSITY_DISSIPATION={4.5}
        VELOCITY_DISSIPATION={3}
        PRESSURE={0.2}
        CURL={3}
        SPLAT_RADIUS={0.12}
        SPLAT_FORCE={13000}
        COLOR_UPDATE_SPEED={6}
        SHADING
        RAINBOW_MODE={false}
        COLOR="#00E5FF"
      />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;