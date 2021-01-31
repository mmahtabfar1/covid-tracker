import Map from "./components/Map";
import StateInfo from "./components/StateInfo";
import Title from "./components/Title.js";
import Section from "./components/Section.js";
import Footer from "./components/Footer.js";
import Options from "./components/Options.js";
import parseCovidData from "./ParseCovidData";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css/App.css";

const App = () => {
  const [currentState, setCurrentState] = useState("United States");
  const [covidData, setCovidData] = useState({});

  useEffect(() => {
    document.title = "Covid-Tracker";
  }, []);

  useEffect(() => {
    const getCovidData = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/nytimes/covid-19-data/master/live/us-states.csv"
        );
        console.log(response.data);
        setCovidData(parseCovidData(response.data));
      } catch (error) {
        console.log(error);
      }
    };

    getCovidData();
  }, []);

  return (
    <div className="App">
      <Title className="Title" />
      <Map
        className="Map"
        stateConfig={covidData}
        clickHandler={setCurrentState}
      />
      <StateInfo state={currentState} />
      <Options className="dropdown" />
      <Section state={currentState} className="Section" />
      <Footer className="Footer"></Footer>
    </div>
  );
};

export default App;
