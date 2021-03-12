import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Blog from './components/Blog/Blog';

function App() {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;

    // Scroll trigger rendering for the home page
    let timelineHome = gsap.timeline({
      scrollTrigger: {
        trigger: element.querySelector('.content-home-upper-content'),
        start: 'top center',
      },
    });
    timelineHome.fromTo(
      '.content-home-upper-content > h1',
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.5, delay: 0.5 }
    );
    timelineHome.fromTo(
      '.content-home-upper-content > div',
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.5 }
    );
    timelineHome.fromTo(
      '.content-home-upper-content > p',
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.5 }
    );
    timelineHome.fromTo(
      '.content-home-lower-content',
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.5 }
    );

    // Scroll trigger rendering for the about page
    let timelineAbout = gsap.timeline({
      scrollTrigger: {
        trigger: element.querySelector('.content-about-middle-content'),
        start: 'top center',
      },
    });
    timelineAbout.fromTo(
      '.content-about-upper-content',
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.5, delay: 0.5 }
    );
    timelineAbout.fromTo(
      '.content-about-middle-one',
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.3, delay: 0.15 }
    );
    timelineAbout.fromTo(
      '.content-about-middle-two',
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.3 }
    );
    timelineAbout.fromTo(
      '.content-about-middle-three',
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.3 }
    );
    timelineAbout.fromTo(
      '.content-about-middle-four',
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.3 }
    );
    timelineAbout.fromTo(
      '.content-about-lower-content > h1',
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.5, delay: 0.3 }
    );
    timelineAbout.fromTo(
      '.content-about-lower-content > div',
      { opacity: 0 },
      { opacity: 1, duration: 0.5, delay: 0.3 }
    );
  }, []);
  return (
    <div ref={ref} className="App">
      <div className="navbar-wrapper">
        <Navbar />
      </div>
      <LandingPage />
      <Home id="home" />
      <About id="about" />
      <Projects id="projects" />
      <Blog id="blog" />
    </div>
  );
}

export default App;
