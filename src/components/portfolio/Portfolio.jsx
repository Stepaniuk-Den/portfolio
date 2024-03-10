import "./portfolio.scss";
import PropTypes from "prop-types";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { projects } from "../../data/projects";
import Github from "../../assets/icons/github copy.svg";
import Safari from "../../assets/icons/safari.svg";

const Single = ({ item }) => {
  const ref = useRef();
  // const screenWidth = window.screen.width;

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-400, 400]);

  return (
    <section id="Portfolio">
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.name} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.name}</h2>
            <p>{item.descEng}</p>
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
              <p>{item.roleEng}</p>
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

const Portfolio = () => {
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
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {projects.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

Single.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    web: PropTypes.string.isRequired,
    gitHub: PropTypes.string.isRequired,
    descEng: PropTypes.string,
    descUa: PropTypes.string,
    roleEng: PropTypes.string,
    roleUa: PropTypes.string,
    technologies: PropTypes.array,
  }).isRequired,
};

export default Portfolio;
