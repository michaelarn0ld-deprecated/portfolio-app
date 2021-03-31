import React from 'react';
import './Projects.scss';

const Projects = ({ id }) => {
  return (
    <div id={id} className="content-projects-wrapper">
      <h1>projects</h1>
      <div className="content-projects-items-bin-one">
        <div className="content-projects-one">
          <div className="project-img"></div>
          <div className="project-description">
            <h1>
              <i class="fas fa-cloud-sun-rain"></i>
            </h1>
            <h3>Weather Application</h3>
          </div>
          <div className="content-projects-one-live">
            <h4>
              This app utilizes a REST API to provide current and forecasted
              weather conditions.
            </h4>
            <a
              href="https://michaelarn0ld.github.io/weather-app/"
              target="_blank"
              className="navbar-left-media-links"
            >
              <h2>Visit Website </h2>
            </a>
          </div>
        </div>
        {/* -------------------------------------- */}
        <div className="content-projects-two">
          <div className="project-img"></div>
        </div>
        <div className="content-projects-three">
          <div className="project-img"></div>
        </div>
      </div>
      <div className="content-projects-items-bin-two">
        <div className="content-projects-four">
          <div className="project-img"></div>
        </div>
        <div className="content-projects-five">
          <div className="project-img"></div>
        </div>
        <div className="content-projects-six">
          <div className="project-img"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
