import React, { useRef, useEffect } from 'react';
import './LandingPage.css';
import { Link } from 'react-scroll';
import { TweenMax, Power3, Power2 } from 'gsap';

const LandingPage = () => {
  let landingHeader = useRef(null);
  let landingArrow = useRef(null);

  useEffect(() => {
    TweenMax.to(landingHeader, 1.5, {
      opacity: 1,
      y: -80,
      ease: Power3.easeOut,
      delay: 0.5,
    });
    TweenMax.to(landingArrow, 1.5, {
      opacity: 1,
      y: -100,
      ease: Power2.easeOut,
      delay: 1.5,
    });
  });

  return (
    <div className="content-landing-page-wrapper">
      <div
        className="content-landing-page-text"
        ref={(element) => (landingHeader = element)}
      >
        Hi, I'm Michael
      </div>
      <div
        className="content-landing-page-arrow"
        ref={(element) => (landingArrow = element)}
      >
        <Link to="home" smooth={true} duration={1000} offset={-80}>
          <i class="fas fa-chevron-down"></i>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
