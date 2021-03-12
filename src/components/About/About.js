import React from 'react';
import './About.css';

const About = ({ id }) => {
  return (
    <div id={id} className="content-about-wrapper">
      <div className="content-about-upper-content">
        <h1>what I do</h1>
      </div>
      <div className="content-about-middle-content">
        <div className="content-about-middle-one">
          <h1>
            <i class="fas fa-rocket"></i>
          </h1>
          <h4>Quick</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className="content-about-middle-two">
          <h1>
            <i class="fas fa-mobile-alt"></i>
          </h1>
          <h4>Responsive</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className="content-about-middle-three">
          <h1>
            <i class="fas fa-lightbulb"></i>
          </h1>
          <h4>Intuitive</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className="content-about-middle-four">
          <h1>
            <i class="fas fa-balance-scale"></i>
          </h1>
          <h4>Balanced</h4>
          <p>I write clean code with a focus on simplicity and reusability. </p>
        </div>
      </div>
      <div className="content-about-lower-content">
        <h1>my toolbox</h1>
        <div className="content-about-lower-content-one">
          <div>
            <i class="fab fa-html5"></i>
            <p>HTML 5</p>
          </div>
          <div>
            <i class="fab fa-css3-alt"></i>
            <p>CSS 3</p>
          </div>
          <div>
            <i class="fab fa-js-square"></i>
            <p>Javascript ES6+</p>
          </div>
          <div>
            <i class="fab fa-react"></i>
            <p>ReactJS</p>
          </div>
        </div>
        <div className="content-about-lower-content-two">
          <div>
            <i class="fab fa-python"></i>
            <p>Python</p>
          </div>
          <div>
            <i class="fab fa-node-js"></i>
            <p>NodeJS</p>
          </div>
          <div>
            <i class="fab fa-git-alt"></i>
            <p>Git</p>
          </div>
          <div>
            <i class="fas fa-database"></i>
            <p className="shift-icon">MongoDB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
