import "./switchLang.scss";
import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";

const SwitchLang = ({ lang, changeLanguage }) => {
  const [openSelect, setOpenSelect] = useState(false);
  const bgRef = useRef(null);

  const languages = ["EN", "UA"];

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (openSelect && bgRef.current && !bgRef.current?.contains(e.target)) {
        setOpenSelect(false);
      }
    };
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [openSelect]);
  const handleOnClickSelect = () => {
    setOpenSelect(!openSelect);
  };

  return (
    <div className="switchLang" ref={bgRef}>
      <button type="button" onClick={handleOnClickSelect}>
        <p>{lang}</p>
      </button>
      <ul className={openSelect ? "openSelect" : ""}>
        {languages.map((language) => (
          <li key={language}>
            <input
              type="radio"
              name="language"
              id={language}
              className="custom-checkbox"
              value={language}
              onChange={changeLanguage}
            />
            <label htmlFor={language}>
              <p>{language}</p>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

SwitchLang.propTypes = {
  lang: PropTypes.string,
  changeLanguage: PropTypes.func,
};

export default SwitchLang;
