import React from "react";
import "./index.css";
import Heading from "../Heading";

const Column = ({ children, title, columnClass, sideLine }) => {
  const classes = `${columnClass} ${sideLine}`;
  return (
    <div className={classes}>
      <Heading title={title} />
      {children}
    </div>
  );
};

export default Column;
