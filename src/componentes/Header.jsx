import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("Header Click");
  };
  return (
    <div className="header">
      <h1>{title}</h1>
      <Button color="teal" text="Add" onClick={onClick} />
    </div>
  );
};

Header.defaultProps = {
  title: "Task Tracker v2",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
