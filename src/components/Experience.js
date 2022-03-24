import React from "react";

export default function Experience(props) {
  return (
    <div className="experience">
      <div>
        <img className="exp--img" src={props.img} />
      </div>
      <div className="exp--description">
        <h3 className="exp--name">{props.title}</h3>
        <h4>{props.position}</h4>
        <h5 className="gray">{props.date}</h5>
        <p className="exp--p gray">{props.description}</p>
      </div>
    </div>
  );
}
