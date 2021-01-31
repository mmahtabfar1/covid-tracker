import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/Section.css";
import populationList from "../PopulationList.json";

const HEALTHY_LINK = "https://svgsilh.com/svg/294095.svg";
const SICK_LINK = "https://svgsilh.com/svg/294095-ff0008.svg";
const Section = (props) => {
  const [selectedStateData, setSelectedStateData] = useState({});
  const [covidData_CTK, setCovidData_CTK] = useState([]);
  const [people, setPeople] = useState([
    HEALTHY_LINK,
    HEALTHY_LINK,
    HEALTHY_LINK,
    HEALTHY_LINK,
    HEALTHY_LINK,
    HEALTHY_LINK,
    HEALTHY_LINK,
    HEALTHY_LINK,
    HEALTHY_LINK,
    HEALTHY_LINK,
  ]);

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

  //handle changing the people array depending on the drop-down selection
  useEffect(() => {
    console.log("in dropdownselection useeffect");
    if (props.dropDownSelection === "infected") {
      //leave all of the people as healthy if nothing has been selected yet
      if (
        Object.keys(selectedStateData).length === 0 &&
        selectedStateData.constructor === Object
      ) {
        return;
      }

      const count = Math.ceil(
        10 *
          ((selectedStateData["positive"] || props.nationData["positive"]) /
            populationList[selectedStateData["state"]] || 320000000)
      );

      console.log(count);

      //turn the first "count" links red and the others stady black
      setPeople((prev) => {
        return prev.map((link, index) => {
          if (index < count) {
            return SICK_LINK;
          }
          return HEALTHY_LINK;
        });
      });
    } else if (props.dropDownSelection === "capacity") {
      //color in red based on percentage of
      // current hospitalization / total dead
      //this percentage of covid patients have a severe case of covid

      const count = Math.ceil(
        10 *
          (selectedStateData["hospitalizedCurrently"] /
            selectedStateData["death"])
      );

      console.log(count);

      setPeople((prev) => {
        return prev.map((link, index) => {
          if (index < count) {
            return SICK_LINK;
          }
          return HEALTHY_LINK;
        });
      });
    }
  }, [
    props.dropDownSelection,
    selectedStateData,
    props.nationData,
    covidData_CTK,
  ]);

  //used to select the new stateData as it is selected from the map
  useEffect(() => {
    covidData_CTK.forEach((state) => {
      if (state["state"] === props.state) {
        setSelectedStateData(state);
      }
    });
  });

  return (
    <div className="Section">
      {console.log(selectedStateData)}
      <div className="flexbox-container">
        {people.map((link, index) => {
          return (
            <img
              key={index}
              src={link}
              alt="healthy"
              width="80"
              height="80"
            ></img>
          );
        })}
      </div>
      <div className="text">
        <p>
          {Math.ceil(
            (100 *
              (selectedStateData["positive"] || props.nationData["positive"])) /
              (populationList[selectedStateData["state"]] || 320000000)
          ).toString() + "%"}{" "}
          of people in {props.state} have contracted COVID. Above is a depiction
          of what that would look like for a line of ten people.
        </p>
        <p>
          {Math.ceil(
            (100 *
              (selectedStateData["hospitalizedCurrently"] ||
                props.nationData["hospitalizedCurrently"])) /
              (selectedStateData["death"] || props.nationData["death"])
          ).toString() + "% "}
          of people in {props.state} who have been hospitalized with COVID have
          passed away during their hospitalization.
        </p>
      </div>
    </div>
  );
};

export default Section;
