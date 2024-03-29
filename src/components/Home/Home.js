import React from "react";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home-img"></div>
      <div className="home-info">
        <p>focusing</p>
        <h1>Ramesh Neupane</h1>
        <h3>Software Engineer</h3>
        <h3>AI Enthusiast</h3>
        <div className="icons">
          <a
            rel="noreferrer"
            href="https://www.facebook.com/ramesh.neupane.098/"
            target="_blank"
          >
            <FaFacebook />
          </a>
          <a
            rel="noreferrer"
            href="https://github.com/RameshNeupane"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            rel="noreferrer"
            href="https://www.instagram.com/__maailo/"
            target="_blank"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
