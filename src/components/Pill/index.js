import React from "react";
import "./index.css";

const Pill = ({ title, color }) => {
  const classes = `pill color-${color}`;
  return <p className={classes}>{title}</p>;
};

export default Pill;
