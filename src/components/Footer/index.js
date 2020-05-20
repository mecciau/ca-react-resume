import React from "react";

import "./index.css";

import Column from "../Column";
import Contact from "../Contact";

const Footer = () => {
  return (
    <div className="Resume-footer">
      <div className="Resume-row">
        <Column columnClass="Resume-col-4">
          <Contact
            title="Adress"
            content={
              <p>
                Imaginary St. 52, <br /> Vilnius, Narnia
              </p>
            }
          />
        </Column>
        <Column columnClass="Resume-col-4">
          <Contact
            title="CONTACT"
            content={
              <p>
                <a href="tel:+37069900000">+37069900000</a> <br />
                <a href="mailto:email@test.dev">email@test.dev</a>
              </p>
            }
          />
        </Column>
        <Column columnClass="Resume-col-4">
          <Contact
            title="SOCIAL"
            content={
              <ul>
                <li>
                  <a href="#">LinkendIn/username</a>
                </li>
                <li>
                  <a href="#">Twitter/username</a>
                </li>
              </ul>
            }
          />
        </Column>
      </div>
    </div>
  );
};

export default Footer;
