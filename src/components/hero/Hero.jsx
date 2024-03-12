import "./hero.scss";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const slideVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",

    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
    });
  }
};

const Hero = ({ lang }) => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>
            {lang === "en" && "STEPANIUK DENYS"}
            {lang === "ua" && "СТЕПАНЮК ДЕНИС"}
          </motion.h2>
          <motion.h1 variants={textVariants}>
            {lang === "en" && "Web developer"}
            {lang === "ua" && "Веб розробник"}
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button
              variants={textVariants}
              whileHover={{ backgroundColor: "#ffffff", color: "#000000" }}
              onClick={() => scrollToSection("Portfolio")}
            >
              {lang === "en" && "See the Latest Works"}
              {lang === "ua" && "Останні роботи"}
            </motion.button>
            <motion.button
              variants={textVariants}
              whileHover={{ backgroundColor: "#ffffff", color: "#000000" }}
              onClick={() => scrollToSection("Contact")}
            >
              {lang === "en" && "Contact Me"}
              {lang === "ua" && "Мої контакти"}
            </motion.button>
          </motion.div>
          <motion.img
            src="/scroll.png"
            alt="scroll to bottom"
            variants={textVariants}
            animate="scrollButton"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={slideVariants}
        initial="initial"
        animate="animate"
      >
        Writer Content Creator Influencer
      </motion.div>
      <div className="imageContainer">
        <img src="/denys.webp" alt="hero" />
      </div>
    </div>
  );
};

Hero.propTypes = {
  lang: PropTypes.string,
};

export default Hero;
