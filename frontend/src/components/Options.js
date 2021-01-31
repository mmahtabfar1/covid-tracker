import React, { useMemo } from "react";
import Select from "react-select";
import "../css/Options.css";

function Options() {
    
    const options = useMemo(
        () => [
            { value: "apple", label: "Apple" },
            { value: "banana", label: "Banana" },
            { value: "orange", label: "Orange" },
            { value: "berry", label: "Berry" },
        ],
        []
    );
    const styles = useMemo(
        () => ({
            option: (provided, state) => ({
                ...provided,
                border: "1px dotted black",
                color: state.data.color,
                opacity: 0.8,
                padding: 20,
            }),
            control: (provided) => ({
                ...provided,
                width: 200,
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
            <Select options={options} defaultValue={options[0]} styles={styles} Default Select />
        </div>
    );
}

export default Options;