import React from "react";
import "./index.css";

const Social = ({ logo, text, altText }) => {
  return (
    <div class="Resume-social">
      <img src={logo} alt={altText} />
      <a href="#">{text}</a>
    </div>
  );
};

export default Social;
