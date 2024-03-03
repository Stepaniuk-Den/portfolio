import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
import Telegram from "../../assets/icons/telegram.svg";
import Linkedin from "../../assets/icons/linkedin.svg";
import Github from "../../assets/icons/github copy.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Stepaniuk Den
        </motion.span>
        <div className="social">
          <a
            href="https://t.me/StepaniukDenys"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Telegram} alt="telegram" />
          </a>
          <a
            href="https://www.linkedin.com/in/denys-stepaniuk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Linkedin} alt="linkedin" />
          </a>
          <a
            href="https://github.com/Stepaniuk-Den"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Github} alt="github" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
