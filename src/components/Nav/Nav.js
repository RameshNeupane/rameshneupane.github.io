import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="Nav">
      <Link to="/about">About</Link>
      <Link to="/">Ramesh Neupane</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Nav;
