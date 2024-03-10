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

const Links = ({ handleCallBack }) => {
  const items = ["Homepage", "Portfolio", "Contact", "About Me"];
  // const items = ["Homepage", "Services", "Portfolio", "Contact", "About Me"];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.div
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleCallBack(false)}
        >
          <a
            href={`#${item}`}
            // key={item}
            // variants={itemVariants}
            // whileHover={{ scale: 1.1 }}
            // whileTap={{ scale: 0.95 }}
            // onClick={() => handleCallBack(false)}
          >
            {item}
          </a>
        </motion.div>
        // <motion.div key={item}>
        //   <Link to={`#${item}`} onClick={() => handleCallBack(false)}>
        //     {item}
        //   </Link>
        // </motion.div>
      ))}
    </motion.div>
  );
};

Links.propTypes = {
  handleCallBack: PropTypes.func.isRequired,
};
export default Links;
