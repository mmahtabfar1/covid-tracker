import React, { useState } from "react";
import "../css/Section.css";
import { healthyPerson } from "../images/black.svg";

const LINK = "https://freesvg.org/img/aiga_toilet_men.png";

const Section = () => {
  let people = [];
  for (let i = 0; i < 10; i++) people.push(LINK);
  people = people.map((link, index) => {
    return <img key={index} src={link} width="70" height="70" />;
  });

  return (
    <div className="Section">
      <div className="flexbox-container">{people}</div>

      <p></p>
    </div>
  );
};

export default Section;
