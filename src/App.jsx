import "./styles/global.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
// import Cursor from "./components/cursor/Cursor";
// import Parallax from "./components/parallax/Parallax";
// import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
// import { useRef } from "react";

const App = () => {
  // const section1Ref = useRef(null);

  // const scrollToSection = (ref) => {
  //   if (ref.current) {
  //     ref.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <div>
      {/* <Cursor /> */}
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      {/* <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section> */}
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
      <section id="About Me">
        <About />
      </section>
    </div>
  );
};

export default App;
