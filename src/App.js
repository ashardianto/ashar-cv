import React from "react";
import eduData from "./eduData";
import skillData from "./skillData";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Skill from "./components/Skill";

export default function App() {
  return (
    <div>
      <Hero />
      <h2 className="edu--title">
        <center>Education</center>
      </h2>
      <section className="edu--list">
        {eduData.map((item, index) => (
          <Education
            key={index}
            img={item.img}
            description={item.description}
            location={item.location}
            title={item.title}
            major={item.major}
            date={item.date}
          />
        ))}
      </section>
      <h2 className="skill--title">
        <center>Skills</center>
      </h2>
      <section className="skill--list">
        {skillData.map((item, index) => (
          <Skill key={index} img={item.img} skill={item.skill} />
        ))}
      </section>
    </div>
  );
}
