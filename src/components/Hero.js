import React from "react";

export default function Hero() {
  return (
    <div className="hero--container">
      <img className="hero--portrait" src="./images/ashar.jpeg" />
      <div className="hero--about">
        <h1 className="hero--typo h1--hero">Ashar Ardianto</h1>
        <h4 className="hero--typo h4--hero">Full Stack Developer</h4>
        <p className="hero--typo p--hero">
          I am an enthusiastic, reliable, flexible, and hard working person.
          Strong foundation in communication, analytics, interpersonal  and social relationship.
        </p>
      </div>
    </div>
  );
}
