import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="Nav">
      <div>
        <NavLink to="/" className="tab">
          R N
        </NavLink>
      </div>
      <div>
        <NavLink to="/about" className="tab">
          About
        </NavLink>
        <NavLink to="/contact" className="tab">
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
