import React from "react";

export default function TeamCard(props) {
  return (
    <div className="card">
      <div className="box">
        <img src={props.img} alt=""/>
        <div className="text">{props.name}</div>
        <p>{props.contact}</p>
      </div>
    </div>
  );
}
