import React from "react";

export default function ServiceCard(props) {
  return (
    <div
      className="card"
      onClick={(e) => (window.open(`${props.link}`))}
    >
      <div className="box">
        {props.logo}
        <div className="text">{props.title}</div>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
