import React from "react";

import Column from "../Column";
import Social from "../Social";
import Work from "../Work";
import Education from "../Education";
import Pill from "../Pill";

import linkedinLogo from "../../images/linkedinLogo.svg";
import twitterLogo from "../../images/twitterLogo.svg";
import githubLogo from "../../images/githubLogo.svg";
import blogLogo from "../../images/blogLogo.svg";

const Main = () => {
  return (
    <div className="Resume-content">
      <div className="Resume-row">
        <Column title="Links" columnClass="Resume-col-4">
          <Social
            logo={linkedinLogo}
            text={"LinkedIn/username"}
            altText={"LinkedIn logo"}
          />
          <Social
            logo={twitterLogo}
            text={"Twitter/@user-handle"}
            altText={"Twitter logo"}
          />
          <Social
            logo={githubLogo}
            text={"LinkedIn/username"}
            altText={"Github logo"}
          />
          <Social
            logo={blogLogo}
            text={"Blog/blog-name"}
            altText={"Blog logo"}
          />
        </Column>
        <Column title="About Me" columnClass="Resume-col-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Column>
      </div>

      <div className="Resume-row">
        <Column title="Education" columnClass="Resume-col-4">
          <Education
            schoolName="School Name"
            year="2009-2013"
            degree="Degree"
          />
          <hr class="education-hr" />
          <Education
            schoolName="School Name"
            year="2009-2013"
            degree="Degree"
          />
        </Column>
        <Column title="Personal Skills" columnClass="Resume-col-4">
          <Pill title="TEAMWORK" color="green" />
          <Pill title="COMMUNICATION" color="yellow" />
          <Pill title="ORGANIZATION" color="red" />
        </Column>
        <Column title="Technical Skills" columnClass="Resume-col-4">
          <Pill title="HTML" color="green" />
          <Pill title="CSS/SCSS" color="green" />
          <Pill title="JAVASCRIPT" color="yellow" />
          <Pill title="REACT.JS" color="yellow" />
        </Column>
      </div>
      <div className="Resume-row">
        <Column title="Work Experience" columnClass="Resume-col-12">
          <div className="Resume-row">
            <Column columnClass="Resume-col-4" sideLine="sideline">
              <Work
                position="Job Position"
                company="Company"
                year="2018 - present"
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
                dolores ipsum minima delectus? Doloribus deleniti quos sint
                autem ratione expedita odit repellat provident laboriosam,
                molestiae quia modi quidem, reiciendis fuga?"
                list={["Lorem ipsum dolor sit", "Earum dolores ipsum"]}
              />
            </Column>
            <Column columnClass="Resume-col-4" sideLine="sideline">
              <Work
                position="Job Position"
                company="Company"
                year="2018 - present"
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
                dolores ipsum minima delectus? Doloribus deleniti quos sint
                autem ratione expedita odit repellat provident laboriosam,
                molestiae quia modi quidem, reiciendis fuga?"
                list={["Lorem ipsum dolor sit", "Earum dolores ipsum"]}
              />
            </Column>
            <Column columnClass="Resume-col-4" sideLine="sideline">
              <Work
                position="Job Position"
                company="Company"
                year="2018 - present"
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
                dolores ipsum minima delectus? Doloribus deleniti quos sint
                autem ratione expedita odit repellat provident laboriosam,
                molestiae quia modi quidem, reiciendis fuga?"
                list={["Lorem ipsum dolor sit", "Earum dolores ipsum"]}
              />
            </Column>
          </div>
        </Column>
      </div>
    </div>
  );
};

export default Main;
