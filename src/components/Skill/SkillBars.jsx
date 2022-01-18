import React from "react";

export default function SkillBars(props) {
  return (
    <div className="bars">
      <div className="info">
        <span>{props.name}</span>
        <span>{props.percent}</span>
      </div>
      <div className={`line ${props.name}`}></div>
    </div>
  );
}
