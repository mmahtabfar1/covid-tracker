import React, { useState, useEffect } from "react";
import USAMap from "react-usa-map";

const Map = ({ clickHandler, stateConfig }) => {
  const stateAbbreviationMap = {
    Alabama: "AL",
    Alaska: "AK",
    Arizona: "AZ",
    Arkansas: "AR",
    California: "CA",
    Colorado: "CO",
    Connecticut: "CT",
    Delaware: "DE",
    "District of Columbia": "DC",
    Florida: "FL",
    Georgia: "GA",
    Hawaii: "HI",
    Idaho: "ID",
    Illinois: "IL",
    Indiana: "IN",
    Iowa: "IA",
    Kansas: "KS",
    Kentucky: "KY",
    Louisiana: "LA",
    Maine: "ME",
    Maryland: "MD",
    Massachusetts: "MA",
    Michigan: "MI",
    Minnesota: "MN",
    Mississippi: "MS",
    Missouri: "MO",
    Montana: "MT",
    Nebraska: "NE",
    Nevada: "NV",
    "New Hampshire": "NH",
    "New Jersey": "NJ",
    "New Mexico": "NM",
    "New York": "NY",
    "North Carolina": "NC",
    "North Dakota": "ND",
    Ohio: "OH",
    Oklahoma: "OK",
    Oregon: "OR",
    Pennsylvania: "PA",
    "Rhode Island": "RI",
    "South Carolina": "SC",
    "South Dakota": "SD",
    Tennessee: "TN",
    Texas: "TX",
    Utah: "UT",
    Vermont: "VT",
    Virginia: "VA",
    Washington: "WA",
    "West Virginia": "WV",
    Wisconsin: "WI",
    Wyoming: "WY",
  };

  const statesCustomConfig = (data) => {
    let result = {};

    for (const state in data) {
      const color_ratio = data[state]["color_ratio"];

      result[stateAbbreviationMap[state]] = {
        fill:
          "rgb(255," +
          (255 - 255 * color_ratio).toString() +
          "," +
          (255 - 255 * color_ratio).toString() +
          ")",
      };
    }

    console.log(result);
    return result;
  };

  return (
    <div className="Map">
      <USAMap
        customize={statesCustomConfig(stateConfig)}
        onClick={(e) => clickHandler(e.target.dataset.name)}
      />
    </div>
  );
};

export default Map;
