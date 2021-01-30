import Map from "./components/Map";
import StateInfo from "./components/StateInfo";
import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [currentState, setCurrentState] = useState("United States");

  useEffect(() => {
    document.title = "Covid-Tracker";
  }, []);

  return (
    <div className="Map">
      <Map clickHandler={setCurrentState} />
      <StateInfo state={currentState} />
    </div>
  );
};

export default App;
