import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const clickHandle = () => {
    const navTabs = document.querySelectorAll(".tab");
    navTabs.forEach((navTab) => {
      navTab.addEventListener("click", () => {
        removeActiveTabClass();
        navTab.classList.add("tab-active");
      });
    });

    const removeActiveTabClass = () => {
      navTabs.forEach((navTab) => {
        navTab.classList.remove("tab-active");
      });
    };
  };

  return (
    <nav className="Nav">
      <Link to="/about" className="tab" onClick={clickHandle}>
        About
      </Link>
      <Link to="/" className="tab" onClick={clickHandle}>
        R N
      </Link>
      <Link to="/contact" className="tab" onClick={clickHandle}>
        Contact
      </Link>
    </nav>
  );
};

export default Nav;
