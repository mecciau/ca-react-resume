import React from "react";
import logo1 from "./images/logo1.svg";
import logo2 from "./images/logo2.svg";
import logo3 from "./images/logo3.svg";
import logo4 from "./images/logo4.svg";
import "./App.css";

function App() {
  return (
    <div className="Resume">
      <div className="Resume-header">
        <div className="Resume-header-details-container">
          <h1 className="Resume-header-name">Sophie Alpert</h1>
          <h2 className="Resume-header-title">Programmer</h2>
        </div>
      </div>

      <div className="Resume-content">
        <div className="Resume-row">
          <div className="Resume-col-4">
            <div className="Resume-links">
              <h3>Links</h3>

              <div class="Resume-linkedin">
                <img src={logo1} />
                <a href="#">LinkedIn</a>
              </div>
              <div class="Resume-twitter">
                <img src={logo2} />
                <a href="#">Twitter</a>
              </div>
              <div class="Resume-github">
                <img src={logo3} />
                <a href="#">Github</a>
              </div>
              <div class="Resume-blog">
                <img src={logo4} />
                <a href="#">Blog</a>
              </div>
            </div>
          </div>
          <div className="Resume-col-8">
            <div className="Resume-about">
              <h3>About Me</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
        <div className="Resume-row">
          <div className="Resume-col-4">
            <div className="Resume-education">
              <div className="Resume-education-row">
                <h3>Education</h3>
                <p>SCHOOL NAME</p>
                <p>2009 - 2013</p>
                <p>Degree</p>
              </div>
              <div className="Resume-education-row">
                <h3>Education</h3>
                <p>SCHOOL NAME</p>
                <p>2009 - 2013</p>
                <p>Degree</p>
              </div>
            </div>
          </div>
          <div className="Resume-col-4">
            <div className="Resume-personal-skills">
              <h3>Personal Skills</h3>
              <p className="color-green">TEAMWORK</p>
              <p className="color-yellow">COMMUNICATION</p>
              <p className="color-red">ORGANIZATION</p>
            </div>
          </div>
          <div className="Resume-col-4">
            <div className="Resume-technical-skills">
              <h3>Technical Skills</h3>
              <p className="color-green">HTML</p>
              <p className="color-green">CSS/SCSS</p>
              <p className="color-yellow">JAVASCRIPT</p>
              <p className="color-yellow">REACT.JS</p>
            </div>
          </div>
        </div>

        <div className="Resume-work-experience">
          <h3>Work Experience</h3>
          <div className="Resume-row">
            <div className="Resume-exp-col-4">
              <div className="Resume-exp-header">
                <p>
                  <b>JOB POSITION</b>
                </p>
                <p>Company</p>
                <p>2018 - present</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
                dolores ipsum minima delectus? Doloribus deleniti quos sint
                autem ratione expedita odit repellat provident laboriosam,
                molestiae quia modi quidem, reiciendis fuga?
              </p>
              <ul>
                <li>Lorem ipsum dolor sit</li>
                <li>Earum dolores ipsum</li>
              </ul>
            </div>
            <div className="Resume-exp-col-4">
              <div className="Resume-exp-header">
                <p>
                  <b>JOB POSITION</b>
                </p>
                <p>Company</p>
                <p>2018 - present</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
                dolores ipsum minima delectus? Doloribus deleniti quos sint
                autem ratione expedita odit repellat provident laboriosam,
                molestiae quia modi quidem, reiciendis fuga?
              </p>
              <ul>
                <li>Lorem ipsum dolor sit</li>
                <li>Earum dolores ipsum</li>
              </ul>
            </div>
            <div className="Resume-exp-col-4">
              <div className="Resume-exp-header">
                <p>
                  <b>JOB POSITION</b>
                </p>
                <p>Company</p>
                <p>2018 - present</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
                dolores ipsum minima delectus? Doloribus deleniti quos sint
                autem ratione expedita odit repellat provident laboriosam,
                molestiae quia modi quidem, reiciendis fuga?
              </p>
              <ul>
                <li>Lorem ipsum dolor sit</li>
                <li>Earum dolores ipsum</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="Resume-social">
        <div className="Resume-row">
          <div className="Resume-social-col-4">
            <div className="Resume-social-address">
              <p className="Resume-social-address-title">ADDRESS</p>
              <p className="Resume-social-address-content">
                Imaginary St. 52, <br /> Vilnius, Narnia
              </p>
            </div>
          </div>
          <div className="Resume-social-col-4">
            <div className="Resume-social-contact">
              <p className="Resume-social-contact-title">CONTACT</p>
              <p className="Resume-social-contact-content">
                <a href="tel:+37069900000">+37069900000</a> <br />{" "}
                <a href="mailto:email@test.dev">email@test.dev</a>
              </p>
            </div>
          </div>
          <div className="Resume-social-col-4">
            <div className="Resume-social-social">
              <p className="Resume-social-social-title">SOCIAL</p>
              <ul className="Resume-social-social-content">
                <li>
                  <a href="">LinkendIn/username</a>
                </li>
                <li>
                  <a href="">Twitter/username</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
