import React from "react";
import heroImgAbout from "../assets/hero.svg";
import { skills } from "../data/skills";
import { Education } from "../components/Education";

export const About = () => {
  return (
    <div className="about">
      <div className="about-me">
        <img src={heroImgAbout} alt="hero" className="about-hero" />
        <article className="about-info">
          <h1>About Me</h1>
          <div className="about-para">
          I am Mrudul Tora, an IT Undergrad at Shri Govindram Seksaria Institute of Technology and Science, Indore. 
          Since my school days, I was quite passionate about computers and always wanted to work on them. 
          Talking about my hobbies and interests, I love playing and watching Cricket. 
          Currently, I am learning Java Enterprise and working on DSA skills.
          </div>
          <div className="skills">
            {skills.map((skill) => {
              const { id, name } = skill;
              return (
                <button key={id} className="skill">
                  {name}
                </button>
              );
            })}
          </div>
        </article>
      </div>

      <Education />
    </div>
  );
};
