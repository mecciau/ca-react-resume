import React from "react";

import "./index.css";

import Column from "../Column";
import Contact from "../Contact";

const Footer = ({ data }) => {
  return (
    <div className="Resume-footer">
      <div className="Resume-row">
        {data.footer.map((foot, index) => {
          return (
            <Column columnClass="Resume-col-4" key={index}>
              <Contact
                title={foot.name}
                content={
                  <p>
                    {foot.items[0]} <br /> {foot.items[1]}
                  </p>
                }
              />
            </Column>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
