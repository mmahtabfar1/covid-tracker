import Map from "./components/Map";
import StateInfo from "./components/StateInfo";
import Title from "./components/Title.js";
import Section from "./components/Section.js";
import Footer from "./components/Footer.js";
import Options from "./components/Options.js";
import parseCSVData from "./ParseCSVData";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css/App.css";

const App = () => {
  const [currentState, setCurrentState] = useState("United States");
  const [covidData_NYT, setCovidData_NYT] = useState(null);
  const [nationData, setNationData] = useState({});

  useEffect(() => {
    document.title = "Covid-Tracker";
  }, []);

  const getCovidData = async () => {
    axios
      .get(
        "https://raw.githubusercontent.com/nytimes/covid-19-data/master/live/us-states.csv"
      )
      .then((response) => {
        setCovidData_NYT(parseCSVData(response.data));
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("https://api.covidtracking.com/v1/us/current.json")
      .then((response) => {
        setNationData(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <div className="App">
      <Title className="Title" />
      <Map
        className="Map"
        stateConfig={covidData_NYT}
        clickHandler={setCurrentState}
      />
      <StateInfo state={currentState} />
      <Options className="dropdown" />
      <Section
        nationData={nationData}
        state={currentState}
        className="Section"
      ></Section>
      <Footer date={covidData_NYT} className="Footer"></Footer>
    </div>
  );
};

export default App;
