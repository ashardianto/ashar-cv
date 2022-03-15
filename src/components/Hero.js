import React from "react";

export default function Hero() {
  return (
    <div className="hero--container">
      <img className="hero--portrait" src="./images/ashar.jpeg" />
      <div className="hero--about">
        <h1 className="hero--typo h1--hero">Ashar Ardianto</h1>
        <h4 className="hero--typo h4--hero">Full Stack Developer</h4>
        <p className="hero--typo p--hero">
          Lorem Ipsum Si Dolor Amet Lorem Ipsum Si Dolor Amet Lorem Ipsum Si
          Dolor Amet Lorem Ipsum Si Dolor Amet
        </p>
      </div>
    </div>
  );
}
