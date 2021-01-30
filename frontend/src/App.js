import USAMap from "react-usa-map";
import React, { useEffect } from "react";
import "./App.css";

const App = () => {
  useEffect(() => {
    document.title = "Covid-Tracker";
  }, []);

  const mapHandler = () => {
    alert("clicked a state!");
  };

  return (
    <div className="App">
      <USAMap onClick={() => mapHandler()} />
    </div>
  );
};

export default App;
