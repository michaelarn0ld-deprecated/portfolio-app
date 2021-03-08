import React, { useState } from 'react';
import menuItems from './menuItems';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
  const [clicked, setClicked] = useState('');
  const [navbar, setNavbar] = useState(false);
  const [tab, setTab] = useState('');
  const [hasBeenClicked, setHasBeenClicked] = useState(false);
  let navDisplay = hasBeenClicked ? {} : { display: 'none' };

  const changeBackground = () => {
    if (window.scrollY >= 80) setNavbar(true);
    else setNavbar(false);
  };

  const highlightNavbarTab = () => {
    if (
      window.scrollY >= 0.6 * window.innerHeight &&
      window.scrollY < 1.6 * window.innerHeight
    )
      setTab('Home');
    else if (
      window.scrollY >= 1.6 * window.innerHeight &&
      window.scrollY < 2.6 * window.innerHeight
    ) {
      setTab('About');
    } else if (
      window.scrollY >= 2.6 * window.innerHeight &&
      window.scrollY < 3.6 * window.innerHeight
    ) {
      setTab('Projects');
    } else if (window.scrollY >= 3.6 * window.innerHeight) {
      setTab('Blog');
    } else setTab('');
  };

  window.addEventListener('scroll', changeBackground);
  window.addEventListener('scroll', highlightNavbarTab);

  return (
    <nav className="navbar-items">
      <div
        className={navbar ? 'navbar-background active' : 'navbar-background'}
      ></div>
      <h1 className="navbar-logo" onClick={() => window.scrollTo({ top: 0 })}>
        Michael Arnold
        <a
          href="https://github.com/michaelarn0ld"
          target="_blank"
          className="media-links"
          style={{ marginLeft: 10 }}
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/michaelarnoldcpp"
          target="_blank"
          className="media-links"
        >
          <i className="fab fa-linkedin"> </i>
        </a>
        <a
          href="https://twitter.com/michaelarn0ld_"
          target="_blank"
          className="media-links"
        >
          <i className="fab fa-twitter-square"> </i>
        </a>
      </h1>
      <div
        className="menu-icon"
        onClick={() => {
          setClicked(!clicked);
          setHasBeenClicked(true);
        }}
      >
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <div className="navbar-main">
        <ul
          style={window.screen.width > 960 ? {} : navDisplay}
          className={clicked ? 'nav-menu active' : 'nav-menu'}
        >
          {menuItems.map((item, index) => {
            return (
              <li key={index}>
                <a
                  className={
                    tab == item.title
                      ? item.activeClassName
                      : item.inactiveClassName
                  }
                  href={item.url}
                  onClick={() => setClicked(false)}
                >
                  {item.title}
                </a>
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
