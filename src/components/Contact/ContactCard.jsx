import React from "react";

export default function ContactCard(props) {
  return (
    <div className="row">
      {props.logo}
      <div className="info">
        <div className="head">{props.title}</div>
        <div className="sub-title">{props.contact}</div>
      </div>
    </div>
  );
}
