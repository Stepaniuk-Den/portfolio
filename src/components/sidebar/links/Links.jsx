import PropTypes from "prop-types";
import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = ({ lang, handleCallBack, scrollToSection }) => {
  const items = [
    { ref: "homepageRef", en: "Homepage", ua: "Головна" },
    { ref: "portfolioRef", en: "Portfolio", ua: "Портфоліо" },
    { ref: "contactRef", en: "Contact", ua: "Контакти" },
    { ref: "aboutRef", en: "About Me", ua: "Про Мене" },
  ];
  // const items = ["Homepage", "Services", "Portfolio", "Contact", "About Me"];

  const handleScroll = (ref) => {
    // const section = document.getElementById(sectionId);
    scrollToSection(ref);
    handleCallBack(false);

    // if (section) {
    //   section.scrollIntoView({ behavior: "smooth" });
    // }
  };
  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item.en}`}
          key={item.en}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleScroll(item.ref)}
        >
          {lang === "en" && item.en}
          {lang === "ua" && item.ua}
        </motion.a>
        // <motion.div
        //   key={item}
        //   variants={itemVariants}
        //   whileHover={{ scale: 1.1 }}
        //   whileTap={{ scale: 0.95 }}
        //   onClick={() => scrollToSection(item)}
        // >
        //   {item}
        // </motion.div>
      ))}
    </motion.div>
  );
};

Links.propTypes = {
  handleCallBack: PropTypes.func.isRequired,
  scrollToSection: PropTypes.func.isRequired,
  lang: PropTypes.string,
};
export default Links;
