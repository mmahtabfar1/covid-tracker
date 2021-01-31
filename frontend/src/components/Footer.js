import React from "react";
import "../css/Footer.css";

const Footer = (props) => {

    console.log(props.date)

    return (
        <div className="Footer">
            <h4>
                Last updated: {props.date && props.date["Florida"]["date"]};
                Public datasets provided by the{" "}
                <a href={"https://github.com/nytimes/covid-19-data/tree/master/live"} style={{ cursor: 'pointer' }}>NYTimes</a>
                {" "}and{" "}
                <a href={"https://covidtracking.com/data"} style={{ cursor: 'pointer' }}>The Atlantic</a>
            </h4>
        </div>
    );
}

export default Footer;