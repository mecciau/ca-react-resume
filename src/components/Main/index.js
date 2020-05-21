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

const Main = ({ data }) => {
  return (
    <div className="Resume-content">
      <div className="Resume-row">
        <Column title="Links" columnClass="Resume-col-4">
          <Social
            logo={linkedinLogo}
            text={`LinkedIn/${data.links.linkedIn}`}
            altText={"LinkedIn logo"}
          />
          <Social
            logo={twitterLogo}
            text={`Twitter/@${data.links.twitter}`}
            altText={"Twitter logo"}
          />
          <Social
            logo={githubLogo}
            text={`Github/${data.links.github}`}
            altText={"Github logo"}
          />
          <Social
            logo={blogLogo}
            text={`Blog/${data.links.blog}`}
            altText={"Blog logo"}
          />
        </Column>
        <Column title={data.aboutMe.title} columnClass="Resume-col-8">
          <p>{data.aboutMe.text}</p>
        </Column>
      </div>

      <div className="Resume-row">
        <Column title={data.education.title} columnClass="Resume-col-4">
          {data.education.schools.map((school, index) => {
            return (
              <React.Fragment key={index}>
                <Education
                  schoolName={school.schoolName}
                  year={school.year}
                  degree={school.degree}
                />
                {data.education.schools.length !== index + 1 && (
                  <hr className="education-hr" />
                )}
              </React.Fragment>
            );
          })}
        </Column>
        <Column title={data.personalSkills.title} columnClass="Resume-col-4">
          {data.personalSkills.skills.map((skill, index) => {
            return <Pill title={skill.name} level={skill.level} key={index} />;
          })}
        </Column>
        <Column title={data.technicalSkills.title} columnClass="Resume-col-4">
          {data.technicalSkills.skills.map((skill, index) => {
            return <Pill title={skill.name} level={skill.level} key={index} />;
          })}
        </Column>
      </div>
      <div className="Resume-row">
        <Column title="Work Experience" columnClass="Resume-col-12">
          <div className="Resume-row">
            {data.workExperience.experience.map((exp, index) => {
              return (
                <Column
                  columnClass="Resume-col-4"
                  sideLine="sideline"
                  key={index}
                >
                  <Work
                    position={exp.jobPosition}
                    company={exp.company}
                    year={exp.duration}
                    description={exp.description}
                    list={exp.list}
                  />
                </Column>
              );
            })}
          </div>
        </Column>
      </div>
    </div>
  );
};

export default Main;
