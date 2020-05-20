import React from "react";
import "./index.css";

const Header = ({ title, name }) => {
  return (
    <div className="Resume-header">
      <div className="Resume-header-details-container">
        <h1 className="Resume-header-name">{name}</h1>
        <h2 className="Resume-header-title">{title}</h2>
      </div>
    </div>
  );
};

export default Header;
