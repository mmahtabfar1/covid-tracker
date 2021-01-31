import React, { useMemo } from "react";
import Select from "react-select";
import "../css/Options.css";

const Options = (props) => {
  const options = useMemo(
    () => [
      { value: "infected", label: "Population Infected" },
      { value: "capacity", label: "Hospital Mortality Rate" },
    ],
    []
  );
  const styles = useMemo(
    () => ({
      option: (provided, state) => ({
        ...provided,
        border: "1px dotted black",
        color: "black",
        opacity: 0.8,
        padding: 20,
      }),
      control: (provided) => ({
        ...provided,
        width: 300,
        background: "red",
      }),
      singleValue: (provided, state) => ({
        ...provided,
        color: state.data.color,
      }),
    }),
    []
  );

  return (
    <div className="Options">
      <div className="types">Availiable Data:</div>
      <Select
        onChange={(e) => props.handler(e.value)}
        options={options}
        defaultValue={options[0]}
        styles={styles}
        Default
        Select
      />
    </div>
  );
};

export default Options;
