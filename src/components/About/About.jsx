/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import ReactTyped from "react-typed";
import CVFile from "./../../FIleCV/DoanMinhKhanh_CV.pdf";
import avatar from "./../../images/avatar1.jpg";
import "./About.css";
export default function About() {
  return (
    // <!-- about section start -->
    <section className="about" id="about">
      <div className="max-width">
        <h2 className="title">About me</h2>
        <div className="about-content">
          <div className="column left">
            <img
              src={avatar}
              alt=" "
              style={{
                border: "1px solid transparent",
                boxShadow:
                  "0 1px 3px 0 rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 2px 1px -1px rgb(0 0 0 / 12%)",
              }}
            />
          </div>
          <div className="column right">
            <div className="text">
              I'm Minh Khanh and I'm a{" "}
              <ReactTyped
                strings={[
                  "Developer",
                  "React Dev",
                  "React Native Dev",
                  "Node js Dev",
                ]}
                typeSpeed={100}
                backSpeed={100}
                loop
              />
            </div>
            <p>
            I'm passionate about learning new technologies to increase the quality of my work and I am always eager to share my knowledge with those around me. I feel that's great. {<br/>}
            What I like. I love to travel with friends, play sports, eat out, enjoy challenges in new places and learn new things, ...
            </p>
            <a href="#about" download href={CVFile}>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
