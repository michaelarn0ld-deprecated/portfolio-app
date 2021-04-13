import React from 'react';
import './Projects.scss';

const Projects = ({ id }) => {
  return (
    <div id={id} className="content-projects-wrapper">
      <h1>projects</h1>
      <div className="content-projects-items-bin-one">
        <div className="content-projects-one">
          <div className="project-img-one"></div>
          <div className="project-description">
            <h1>
              <i class="fas fa-cloud-sun-rain"></i>
            </h1>
            <h3>Weather Application</h3>
          </div>
          <div className="content-projects-live">
            <h4>
              This app utilizes an external API to provide current and
              forecasted weather conditions.
            </h4>
            <div className="content-projects-live-links">
              <a
                href="https://github.com/michaelarn0ld/weather-app"
                target="_blank"
                className="navbar-left-media-links"
              >
                <h3>View Code</h3>
              </a>
              <a
                href="https://michaelarn0ld.github.io/weather-app/"
                target="_blank"
                className="navbar-left-media-links"
              >
                <h3>View Site</h3>
              </a>
            </div>
          </div>
        </div>
        <div className="content-projects-two">
          <div className="project-img-two"></div>
          <div className="project-description">
            <h1>
              <i class="fas fa-project-diagram"></i>
            </h1>
            <h3>Pathfinder Application</h3>
          </div>
          <div className="content-projects-live">
            <h4>
              This is a visualization of the Traveling Salesman problem, which
              minimizes the distance to visit all nodes in a graph.
            </h4>
            <div className="content-projects-live-links">
              <a
                href="https://github.com/michaelarn0ld/pathfinder-app"
                target="_blank"
                className="navbar-left-media-links"
              >
                <h3>View Code</h3>
              </a>
              <a
                href="https://michaelarn0ld.github.io/pathfinder-app/"
                target="_blank"
                className="navbar-left-media-links"
              >
                <h3>View Site</h3>
              </a>
            </div>
          </div>
        </div>
        <div className="content-projects-three">
          <div className="project-img-one"></div>
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
