import React from "react";
import "./index.css";

const LangSelect = ({ setLang }) => {
  const onChange = (e) => {
    setLang(e.target.value);
  };
  return (
    <div className="lang-select">
      <select id="lang-select" onChange={onChange}>
        <option value="en">English</option>
        <option value="lt">Lietuviskai</option>
      </select>
    </div>
  );
};

export default LangSelect;
