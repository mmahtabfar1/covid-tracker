import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/Section.css";

const LINK = "https://freesvg.org/img/aiga_toilet_men.png";

const Section = (props) => {
  const [selectedStateData, setSelectedStateData] = useState({});
  const [covidData_CTK, setCovidData_CTK] = useState([]);

  //get all of the state data
  useEffect(() => {
    const getCovidData_CTK = async () => {
      axios
        .get("https://api.covidtracking.com/v1/states/current.json")
        .then((response) => {
          setCovidData_CTK(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getCovidData_CTK();
  }, []);

  //used to select the new stateData as it is selected from the map
  useEffect(() => {
    covidData_CTK.forEach((state) => {
      if (state["state"] === props.state) {
        setSelectedStateData(state);
      }
    });
  });

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
        Current state is: {props.state}
        50% of people in {props.state} will not have a ICU bed available to
        them. Here's what that looks like. Cases:{" "}
        {selectedStateData["positive"] || props.nationData["positive"]}
      </p>
    </div>
  );
};

export default Section;
