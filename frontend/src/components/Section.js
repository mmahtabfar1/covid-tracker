import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/Section.css";

const LINK = "https://freesvg.org/img/aiga_toilet_men.png";

const Section = (props) => {
  const [stateData, setStateData] = useState({});

  useEffect(() => {
    axios
      .get("https://api.covidtracking.com/v2beta/states/CA/2021-01-29.json")
      .then((response) => {
        console.log(response);
        console.log(response.data);
      });
  }, [props.state]);

  let people = [];
  for (let i = 0; i < 10; i++) people.push(LINK);
  people = people.map((link, index) => {
    return (
      <img key={index} src={link} alt="healthy boi" width="80" height="80" />
    );
  });

  return (
    <div className="Section">
      <div className="flexbox-container">{people}</div>

      <p>
        Current stat is: {props.state}
        50% of people in {props.state} will not have a ICU bed available to
        them. Here's what that looks like.
      </p>
    </div>
  );
};

export default Section;
