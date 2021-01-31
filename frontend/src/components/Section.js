import React, { useState } from "react";
import "../css/Section.css";

const LINK = "https://freesvg.org/img/aiga_toilet_men.png";

const Section = () => {
  let people = [];
  for (let i = 0; i < 10; i++) people.push(LINK);
  people = people.map((link, index) => {
    return <img key={index} src={link} width="80" height="80" />;
  });

  return (
    <div className="Section">
      <div className="flexbox-container">{people}</div>

      <p>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
        dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
        Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
        sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
      </p>
    </div>
  );
};

export default Section;
