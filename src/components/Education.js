import React from "react";

export default function Education(props) {
  return (
    <div className="education">
      <div>
        <img className="edu--img" src={props.img} />
      </div>
      <div className="edu--description">
        <h3 className="edu--name">{props.title}</h3>
        <h4>{props.major}</h4>
        <h5 className="gray">{props.date}</h5>
        <p className="edu--p gray">{props.description}</p>
      </div>
    </div>
  );
}
