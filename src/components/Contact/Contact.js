import React from "react";
import "./Contact.css";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact">
      <div className="github">
        <a
          rel="noreferrer"
          href="https://github.com/RameshNeupane"
          target="_blank"
        >
          <FaGithub title="Github" />
        </a>
      </div>
      <div className="social-media">
        <a
          rel="noreferrer"
          href="https://www.facebook.com/ramesh.neupane.098/"
          target="_blank"
        >
          <FaFacebook title="Facebook" />
        </a>
        <a
          rel="noreferrer"
          href="https://www.instagram.com/__maailo/"
          target="_blank"
        >
          <FaInstagram title="Instagram" />
        </a>
      </div>
      <div className="email">
        <FaEnvelope title="Email" />
        <hr />
        <p>neupaneramesh555@gmail.com</p>
      </div>
      <div className="mobile">
        <FaPhoneAlt title="Mobile" />
        <hr />
        <p title="ntc">9866255970</p>
        <p title="ncell">9808223532</p>
      </div>
    </div>
  );
};

export default Contact;
