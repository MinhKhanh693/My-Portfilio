import React from "react";
import "./Skill.css";
import SkillBars from "./SkillBars";

export default function Skill() {
  return (
    <section className="skills" id="skills">
      <div className="max-width">
        <h2 className="title">My skills</h2>
        <div className="skills-content" style={{ alignItems: "flex-start" }}>
          <div className="column left">
            <div className="text">My creative skills & experiences.</div>
            <p>
              I have skills in working with HTML, CSS, JavaScript, Es6. and
              JavaScript libraries like React JS, Redux, React-Native, Express,
              as well as Node JS and NoSql databases like MongoDB. In addition,
              I know a little bit about photoshop adobe as well as Ui Ux,...
            </p>
            <a href="#Skills">Read more</a>
          </div>
          <div className="column right">
            <SkillBars name="HTML" percent="90%" />
            <SkillBars name="CSS" percent="80%" />
            <SkillBars name="JAVASCRIPT" percent="80%" />
            <SkillBars name="REACTJS" percent="80%" />
            <SkillBars name="REDUX-TOOLKIT" percent="70%" />
            <SkillBars name="REACT-NAVITE" percent="50%" />
            <SkillBars name="NODEJS" percent="65%" />
            <SkillBars name="EXPERSS-JS" percent="65%" />
            <SkillBars name="MONGODB" percent="65%" />
          </div>
        </div>
      </div>
    </section>
  );
}
