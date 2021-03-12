import React from 'react';
import './LandingPage.css';
import { Link } from 'react-scroll';

const LandingPage = () => {
  return (
    <div className="content-landing-page-wrapper">
      <div className="content-landing-page-text">Hi, I'm Michael</div>
      <div className="content-landing-page-arrow">
        <Link to="home" smooth={true} duration={1000} offset={-80}>
          <i class="fas fa-chevron-down"></i>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
