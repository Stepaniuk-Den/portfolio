import "./portfolio.scss";
import PropTypes from "prop-types";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { projects } from "../../data/projects";
import Github from "../../assets/icons/github copy.svg";
import Safari from "../../assets/icons/safari.svg";

const Single = ({ item, lang }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-400, 400]);

  return (
    <section id="Portfolio">
      <div className="container">
        <div className="wrapperPortfolio">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.name} loading="lazy" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.name}</h2>
            <p>
              {lang === "en" && item.descEn}
              {lang === "ua" && item.descUa}
            </p>
            <div className="projectDetails">
              <ul>
                {item.technologies.map((technology) => (
                  <li key={technology.id}>
                    <div className="technologiesWrapper">
                      <img
                        src={technology.svg}
                        alt={technology.name}
                        loading="lazy"
                      />
                    </div>
                  </li>
                ))}
              </ul>
              <p>
                {lang === "en" && item.roleEn}
                {lang === "ua" && item.roleUa}
              </p>
            </div>
            <div className="buttonContainer">
              <button>
                <a href={item.web} target="_blank" rel="noopener noreferrer">
                  <img src={Safari} alt="Internet" />
                  <span>See Demo</span>
                </a>
              </button>
              <button>
                <a href={item.gitHub} target="_blank" rel="noopener noreferrer">
                  <img src={Github} alt="GitHub" />
                  <span>Go to Repo</span>
                </a>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = ({ lang }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <h2 className="title">
        {lang === "en" && "My projects"}
        {lang === "ua" && "Мої проєкти"}
      </h2>
      <div className="progress">
        <h1>
          {lang === "en" && "Featured Works"}
          {lang === "ua" && "Останні роботи"}
        </h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {projects.map((item) => (
        <Single item={item} key={item.id} lang={lang} />
      ))}
    </div>
  );
};

Single.propTypes = {
  lang: PropTypes.string,
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    web: PropTypes.string.isRequired,
    gitHub: PropTypes.string.isRequired,
    descEn: PropTypes.string,
    descUa: PropTypes.string,
    roleEn: PropTypes.string,
    roleUa: PropTypes.string,
    technologies: PropTypes.array,
  }).isRequired,
};

Portfolio.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default Portfolio;
