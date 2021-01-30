import React, { useState, useEffect } from "react";
import USAMap from "react-usa-map";

const Map = ({ clickHandler }) => {
  return (
    <div className="Map">
      <USAMap onClick={(e) => clickHandler(e.target.dataset.name)} />
    </div>
  );
};

export default Map;
