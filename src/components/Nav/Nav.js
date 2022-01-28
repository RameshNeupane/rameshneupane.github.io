import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="Nav">
      <NavLink to="/about" className="tab">
        About
      </NavLink>
      <NavLink to="/" className="tab">
        R N
      </NavLink>
      <NavLink to="/contact" className="tab">
        Contact
      </NavLink>
    </nav>
  );
};

export default Nav;
