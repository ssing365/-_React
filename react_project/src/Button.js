import PropTypes from "prop-types";
import eggs from "./Button.module.css";

Button.propTypes = {
  text: PropTypes.string.isRequired,
  fontsize: PropTypes.number.isRequired,
};

function Button({ text, fontsize, onClick }) {
  return (
    <button
      onClick={onClick}
      className={eggs.potato}
      style={{ fontSize: fontsize }}
    >
      {text}
    </button>
  );
}

export default Button;
