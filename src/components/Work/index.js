import React from "react";
import "./index.css";

const Work = ({ position, company, year, description, list }) => {
  return (
    <React.Fragment>
      <div className="Resume-exp-header">
        <p className="exp-job-position">{position}</p>
        <p className="exp-company">{company}</p>
        <p className="exp-year">{year}</p>
      </div>
      <p className="exp-description">{description}</p>
      <ul className="exp-list">
        {list.map((l) => (
          <li>{l}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Work;
