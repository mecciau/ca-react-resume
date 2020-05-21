import React from "react";
import "./index.css";

const Heading = ({ title }) => {
  if (!title) return null;
  return <h3 className="heading">{title}</h3>;
};

export default Heading;
