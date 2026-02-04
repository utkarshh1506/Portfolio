import React from "react";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import final from "../../assets/final.png";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={final} alt="" />
      <h1>
        <span>I'm Utkarsh Singh, </span>A Full Stack Developer.
      </h1>
      <p>
        I am a Full Stack Developer with experience in building dynamic and
        responsive web applications from front to back. I work with technologies
        like JavaScript, React, Node.js, Express, and MongoDB to develop
        scalable solutions. I enjoy solving real-world problems, writing clean
        and maintainable code, and continuously learning new tools and
        frameworks to improve my craft.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a
            href="https://drive.google.com/file/d/1gx9fENp0dEg18ujs1l5MAeNamm5P1dZ5/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="anchor-link"
          >
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
