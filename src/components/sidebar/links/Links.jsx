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

const Links = ({ lang, handleCallBack }) => {
  const items = [
    { en: "Homepage", ua: "Головна" },
    { en: "Portfolio", ua: "Портфоліо" },
    { en: "Contact", ua: "Контакти" },
    { en: "About Me", ua: "Про Мене" },
  ];

  // const handleScroll = (sectionId) => {
  //   const section = document.getElementById(sectionId);

  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" });
  //     handleCallBack(false);
  //   }
  // };
  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item.en}`}
          key={item.en}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleCallBack(false)}
        >
          {lang === "en" && item.en}
          {lang === "ua" && item.ua}
        </motion.a>
        // <motion.div
        //   key={item.en}
        //   variants={itemVariants}
        //   whileHover={{ scale: 1.1 }}
        //   whileTap={{ scale: 0.95 }}
        //   onClick={() => handleScroll(item.ref)}
        // >
        //   {lang === "en" && item.en}
        //   {lang === "ua" && item.ua}
        // </motion.div>
      ))}
    </motion.div>
  );
};

Links.propTypes = {
  handleCallBack: PropTypes.func.isRequired,
  lang: PropTypes.string,
};
export default Links;
