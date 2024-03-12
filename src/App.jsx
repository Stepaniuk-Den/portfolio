import "./styles/global.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
// import Cursor from "./components/cursor/Cursor";
import Portfolio from "./components/portfolio/Portfolio";
import { useState } from "react";
import { useRef } from "react";

const App = () => {
  const [lang, setLang] = useState("en");
  const homepageRef = useRef(null);
  const contactRef = useRef(null);

  const changeLanguage = (e) => {
    const currentLang = e.currentTarget.value.toLowerCase();
    setLang(currentLang);
  };

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* <Cursor /> */}
      <section id="Homepage" ref={homepageRef}>
        <Navbar
          lang={lang}
          changeLanguage={changeLanguage}
          scrollToSection={scrollToSection}
        />
        <Hero lang={lang} />
      </section>
      <Portfolio lang={lang} />
      <section id="Contact" ref={contactRef}>
        <Contact lang={lang} />
      </section>
      <section id="About Me">
        <About lang={lang} />
      </section>
    </div>
  );
};

export default App;
