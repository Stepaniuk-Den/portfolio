import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
// import Telegram from "../../assets/icons/telegram.svg";
// import Linkedin from "../../assets/icons/linkedin.svg";
// import Github from "../../assets/icons/github copy.svg";
import LinkComponent from "../linkComponent/LinkComponent";
import { contacts } from "../../data/contacts";

const Navbar = () => {
  const { telegram, gitHub, linkedIn } = contacts;
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Stepaniuk Denys
        </motion.span>
        <div className="social">
          {/* <a
            href="https://t.me/StepaniukDenys"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Telegram} alt="telegram" />
          </a> */}
          <LinkComponent to={`${telegram.telegram}`} svg={telegram.svg} />
          {/* <a
            href="https://www.linkedin.com/in/denys-stepaniuk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Linkedin} alt="linkedin" />
          </a> */}
          <LinkComponent to={`${linkedIn.linkedIn}`} svg={linkedIn.svg} />
          {/* <a
            href="https://github.com/Stepaniuk-Den"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Github} alt="github" />
          </a> */}
          <LinkComponent to={`${gitHub.gitHub}`} svg={gitHub.svg} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
