import React from "react";
import "./index.css";

const Education = ({ schoolName, year, degree }) => {
  return (
    <div className="education">
      <p className="school-name">{schoolName}</p>
      <p className="year">{year}</p>
      <p className="degree">{degree}</p>
    </div>
  );
};

export default Education;
