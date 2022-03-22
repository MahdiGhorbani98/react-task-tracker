import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, color, onClick }) => {
  //   const onClick = () => {
  //     console.log("Click");
  //   };
  return (
    <button
      className="btn"
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
