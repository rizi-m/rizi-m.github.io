import React from "react";
import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ children }) => <header>{children}</header>;

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};

export default Header;
