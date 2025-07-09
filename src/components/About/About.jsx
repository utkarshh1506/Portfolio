import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import photo from '../../assets/photo.jpg'

const About = () => {
  return (
    <div id='about' className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={photo} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hey there! I'm Utkarsh Singh, a full stack developer who genuinely
              enjoys building things that live on the web. I love the entire
              process—bringing an idea to life, shaping how it looks, and making
              sure it actually works behind the scenes. Over the past few years,
              I’ve worked on a variety of projects, from clean frontend
              interfaces using React and Next.js, to solid backend APIs with
              Node.js, Express, and databases like PostgreSQL and MongoDB. I
              like to think of myself as a problem-solver first, developer
              second—code is just my tool.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML, CSS, JavaScript</p>
              <div className="bar">
                <hr style={{ width: "85%" }} />
              </div>
            </div>
            <div className="about-skill">
              <p>React.js, Next.js</p>
              <div className="bar">
                <hr style={{ width: "70%" }} />
              </div>
            </div>
            <div className="about-skill">
              <p>
                Node.js, Express.js, TypeScript, REST API, MongoDB, PostgreSQL,
                SQL, Clerk
              </p>
              <div className="bar">
                <hr style={{ width: "90%" }} />
              </div>
            </div>
            <div className="about-skill">
              <p>Git & GitHub, Docker, Vercel, Render, Railway</p>
              <div className="bar">
                <hr style={{ width: "95%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
