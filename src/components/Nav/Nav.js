import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const navTabs = document.querySelectorAll(".tab");
  console.log(navTabs);
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

  return (
    <nav className="Nav">
      <Link to="/about" className="tab tab-active">
        About
      </Link>
      <Link to="/" className="tab">
        Ramesh Neupane
      </Link>
      <Link to="/contact" className="tab">
        Contact
      </Link>
    </nav>
  );
};

export default Nav;
