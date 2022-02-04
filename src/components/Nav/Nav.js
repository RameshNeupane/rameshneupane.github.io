import React from "react";
import "./Nav.css";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="Nav">
      <div className="logo">
        <Link to="/" className="tab logo-tab">
          RN
        </Link>
      </div>
      <div className="navs">
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
