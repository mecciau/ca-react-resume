import React from "react";
import "./index.css";

const Pill = ({ title, level }) => {
  let color;
  switch (level) {
    case "expert":
      color = "green";
      break;
    case "advanced":
      color = "yellow";
      break;
    case "beginner":
      color = "red";
      break;
    default:
      color = "";
      break;
  }
  const classes = `pill color-${color}`;
  return <p className={classes}>{title}</p>;
};

export default Pill;
