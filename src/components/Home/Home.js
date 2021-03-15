import React from 'react';
import './Home.css';
import img from '../../images/professional-headshot.jpg';

const Home = ({ id }) => {
  return (
    <div id={id} className="content-home-wrapper">
      <div className="content-home-upper-content">
        <h1>Who i am</h1>
        <div className="content-home-image">
          <img src={img} alt="Selfie" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corrupti
          voluptates cum voluptatum eaque in accusantium, aliquam doloribus,
          reiciendis sint architecto ab ipsa saepe? Optio cumque similique
          quaerat fugiat, facilis quos error provident eos ab est odit ad, quo
          eius voluptates, itaque facere minima eaque? Esse distinctio inventore
          alias qui quasi quos magnam soluta, nulla voluptatibus cum mollitia
          omnis adipisci aliquam animi modi, nihil tempora a. Incidunt
          consectetur voluptatum eaque totam.
        </p>
      </div>
      <div className="content-home-lower-content">
        <div className="content-home-lower-one">
          <h1>
            <i class="fas fa-laptop-code"></i>
          </h1>
          <h4>Software Developer</h4>
        </div>
        <div className="content-home-lower-two">
          <h1>
            <i class="fas fa-flask"></i>
          </h1>
          <h4>Science Enthusiast</h4>
        </div>
        <div className="content-home-lower-three">
          <h1>
            <i class="fas fa-dumbbell"></i>
          </h1>
          <h4>Fitness Fanatic</h4>
        </div>
        <div className="content-home-lower-four">
          <h1>
            <i class="fas fa-users"></i>
          </h1>
          <h4>UI/UX Designer</h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
