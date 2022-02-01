import React from "react";
import "./About.css";
import {
  SiC,
  SiCplusplus,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiPython,
  SiGit,
  SiNumpy,
  SiPandas,
  SiTensorflow,
  SiKeras,
  SiReact,
} from "react-icons/si";

const About = () => {
  return (
    <div className="about-container">
      <div className="about">
        <h1>About</h1>
        <hr />
        <p>
          Hello there, I am a front-end developer from Kathmandu, Nepal. I
          mainly use React.
          <br />
          <br />I am also an Artificial Intelligence (AI) enthusiast. I am
          learning Machine Learning algorithms and I create solutions for real
          world scenarios.
        </p>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <hr />
        <div className="skills-container">
          <div className="basic-lang">
            <SiC title="C Programming" />
            <SiCplusplus title="C++" />
            <SiPython title="Python" />
          </div>
          <hr />
          <div className="frontend">
            <SiHtml5 title="HTML" />
            <SiCss3 title="CSS" />
            <SiJavascript title="JavaScript" />
            <SiReact title="React" />
            <SiGit title="Git" />
          </div>
          <hr />
          <div className="deep-learning">
            <SiNumpy title="Numpy" />
            <SiPandas title="Pandas" />
            <SiTensorflow title="Tensorflow" />
            <SiKeras title="Keras" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
