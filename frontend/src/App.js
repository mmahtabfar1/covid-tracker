import Map from "./components/Map";
import StateInfo from "./components/StateInfo";
import Title from "./components/Title.js";
import Section from "./components/Section.js";
import React, { useEffect, useState } from "react";
import "./css/App.css";

const App = () => {
  const [currentState, setCurrentState] = useState("United States");

  useEffect(() => {
    document.title = "Covid-Tracker";
  }, []);

  return (
    <div className="App">
      <Title className="Title" />
      <Map clickHandler={setCurrentState} />
      <StateInfo state={currentState} />
      <Section className="Section">
          
      </Section>
    </div>
  );
};

export default App;
