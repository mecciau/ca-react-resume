import React from "react";
import "./index.css";

const Contact = ({ title, content }) => {
  return (
    <div className="Resume-contact">
      <p className="Resume-contact-title">{title}</p>
      <div className="Resume-contact-content">{content}</div>
    </div>
  );
};

export default Contact;
