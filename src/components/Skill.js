import React from "react";

export default function Skill(props) {
  return (
    <div className="skill">
      <img className="skill--img" src={props.img} />
      <h4 className="skill--typo">
        <center>{props.skill}</center>
      </h4>
    </div>
  );
}
