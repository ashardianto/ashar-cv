import React from "react";
import eduData from "./eduData";
import skillData from "./skillData";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Skill from "./components/Skill";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="edu--list">
        <h2 className="edu--title" id="edu--title">
          <center>Education</center>
        </h2>
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
      <h2 className="skill--title" id="skill--title">
        <center>Languages and Tools</center>
      </h2>
      <section className="skill--list">
        {skillData.map((item, index) => (
          <Skill key={index} img={item.img} skill={item.skill} />
        ))}
      </section>
      <h2 className="experience--title">
        <center>Experience</center>
      </h2>
      <section className="experience--list" id="experience--list">
        <Experience />
      </section>
      <Contact />
    </div>
  );
}
