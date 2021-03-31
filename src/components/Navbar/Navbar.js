import React, { useState } from 'react';
import menuItems from './menuItems';
import './Navbar.css';
import { Button } from './Button';
import { Link } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';

function Navbar() {
  // ************************************** //
  // state management
  const [clicked, setClicked] = useState('');
  const [navbar, setNavbar] = useState(false);
  const [tab, setTab] = useState('');
  const [hasBeenClicked, setHasBeenClicked] = useState(false);
  let navDisplay = hasBeenClicked ? {} : { display: 'none' };

  // this function changes the styling of the navbar from transparent to filled
  const changeBackground = () => {
    if (window.scrollY >= 80) setNavbar(true);
    else setNavbar(false);
  };

  // this highlights a tab on the navbar when we reach a certain page in the document
  const highlightNavbarTab = () => {
    if (
      window.scrollY >=
        document.getElementById('home').getBoundingClientRect().top +
          window.pageYOffset -
          85 &&
      window.scrollY <
        document.getElementById('about').getBoundingClientRect().top +
          window.pageYOffset -
          85
    )
      setTab('Home');
    else if (
      window.scrollY >=
        document.getElementById('about').getBoundingClientRect().top +
          window.pageYOffset +
          -85 &&
      window.scrollY <
        document.getElementById('projects').getBoundingClientRect().top +
          window.pageYOffset -
          85
    ) {
      setTab('About');
    } else if (
      window.scrollY >=
        document.getElementById('projects').getBoundingClientRect().top +
          window.pageYOffset -
          85 &&
      window.scrollY <
        document.getElementById('blog').getBoundingClientRect().top +
          window.pageYOffset -
          85
    ) {
      setTab('Projects');
    } else if (
      window.scrollY >=
      document.getElementById('blog').getBoundingClientRect().top +
        window.pageYOffset -
        85
    ) {
      setTab('Blog');
    } else setTab('');
  };

  window.addEventListener('scroll', changeBackground);
  window.addEventListener('scroll', highlightNavbarTab);
  // ************************************** //

  // render this code to the screen
  return (
    <nav className={navbar ? 'navbar-items active' : 'navbar-items'}>
      <div
        className={navbar ? 'navbar-background active' : 'navbar-background'}
      ></div>
      <h1 className="navbar-left" onClick={() => scroll.scrollToTop()}>
        <i class="fas fa-flask"></i>Michael Arnold
      </h1>
      <div
        className="mobile-menu-icon"
        onClick={() => {
          setClicked(!clicked);
          setHasBeenClicked(true);
        }}
      >
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <div className="navbar-right">
        <ul
          style={window.screen.width > 960 ? {} : navDisplay}
          className={
            clicked
              ? 'nav-right-links-wrapper active'
              : 'nav-right-links-wrapper'
          }
        >
          {menuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className={
                    tab == item.title
                      ? item.activeClassName
                      : item.inactiveClassName
                  }
                  to={item.id}
                  smooth={true}
                  duration={1000}
                  offset={navbar ? -55 : -80}
                  onClick={() => {
                    setClicked(false);
                  }}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <Button>Contact</Button>
      </div>
    </nav>
  );
}

export default Navbar;
