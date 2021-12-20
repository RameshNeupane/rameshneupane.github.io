import React from "react";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import "./Home.css";
import ramesh from "../../images/background.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home">
        <img src={ramesh} alt="Ramesh Neupane" />
        <h1>Ramesh Neupane</h1>
        <h3>Software Engineer</h3>
        <div className="icons">
          <a
            rel="noreferrer"
            href="https://www.facebook.com/rawmesh.neupane.9/"
            target="_blank"
          >
            <FaFacebook />
          </a>
          <a href="https://github.com/RameshNeupane" target="_black">
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
