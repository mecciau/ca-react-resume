import React from "react";
import "./index.css";

const Contact = ({ title, content }) => {
  return (
    <div className="Resume-contact">
      <p className="Resume-contact-title">{title}</p>
      <p className="Resume-contact-content">{content}</p>
    </div>
  );
};

export default Contact;
