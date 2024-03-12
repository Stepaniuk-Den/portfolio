import "./styles/global.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
// import Cursor from "./components/cursor/Cursor";
import Portfolio from "./components/portfolio/Portfolio";
import { useState } from "react";

const App = () => {
  const [lang, setLang] = useState("en");

  const changeLanguage = (e) => {
    const currentLang = e.currentTarget.value.toLowerCase();
    setLang(currentLang);
  };

  return (
    <div>
      {/* <Cursor /> */}
      <section id="Homepage">
        <Navbar lang={lang} changeLanguage={changeLanguage} />
        <Hero lang={lang} />
      </section>
      <Portfolio lang={lang} />
      <section id="Contact">
        <Contact lang={lang} />
      </section>
      <section id="About Me">
        <About lang={lang} />
      </section>
    </div>
  );
};

export default App;
