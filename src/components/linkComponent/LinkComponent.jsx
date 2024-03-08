import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./linkComponent.scss";

const LinkComponent = ({
  to = "/",
  target = "_blank",
  type,
  rel = "noreferrer noopener",
  svg = null,
  text = null,
  className = "linkComponent",
}) => {
  return (
    <NavLink
      to={to}
      target={target}
      type={type}
      rel={rel}
      className={className}
    >
      {svg && <img src={svg} alt={text} />}
      {text}
    </NavLink>
  );
};

LinkComponent.propTypes = {
  to: PropTypes.string.isRequired,
  target: PropTypes.string,
  type: PropTypes.string,
  rel: PropTypes.string,
  svg: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
};

export default LinkComponent;
