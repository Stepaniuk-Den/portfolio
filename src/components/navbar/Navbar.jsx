import "./navbar.scss";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
import LinkComponent from "../linkComponent/LinkComponent";
import { contacts } from "../../data/contacts";
import SwitchLang from "../switchLang/switchLang";

const Navbar = ({ lang, changeLanguage }) => {
  const { telegram, gitHub, linkedIn } = contacts;
  return (
    <div className="navbar">
      <Sidebar lang={lang} />
      <div className="wrapperNavbar">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {lang === "en" && "Stepaniuk Denys"}
          {lang === "ua" && "Степанюк Денис"}
        </motion.span>
        <div className="social">
          <LinkComponent to={`${telegram.telegram}`} svg={telegram.svg} />
          <LinkComponent to={`${linkedIn.linkedIn}`} svg={linkedIn.svg} />
          <LinkComponent to={`${gitHub.gitHub}`} svg={gitHub.svg} />
        </div>
        <SwitchLang lang={lang} changeLanguage={changeLanguage} />
      </div>
    </div>
  );
};

Navbar.propTypes = {
  lang: PropTypes.string,
  changeLanguage: PropTypes.func,
};
export default Navbar;
