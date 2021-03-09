import React from 'react';
import './Home.css';

const Home = ({ id }) => {
  return (
    <div id={id} className="content-home-wrapper">
      <div className="content-home-upper">
        <h1>Hello World</h1>
      </div>
      <div className="content-home-middle">
        <h1>Hello Middle</h1>
      </div>
      <div className="content-home-lower">
        <h1>Hello Lower</h1>
      </div>
    </div>
  );
};

export default Home;
