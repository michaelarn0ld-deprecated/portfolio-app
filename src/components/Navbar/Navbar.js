import React, { useState } from 'react';
import menuItems from './menuItems';
import './Navbar.css';
import { Button } from '../Button';

function Navbar() {
  const [clicked, setClicked] = useState(false);

  return (
    <nav className="navbar-items">
      <h1 className="navbar-logo">
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
      <div className="menu-icon" onClick={() => setClicked(!clicked)}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <div className="navbar-main">
        <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
          {menuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.className} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <Button style={{ fontWeight: 'bold' }}>Contact</Button>
      </div>
    </nav>
  );
}

export default Navbar;
