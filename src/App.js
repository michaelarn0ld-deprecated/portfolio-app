import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <div className="App">
      <div className="landing-page">
        <div className="nav-wrapper">
          <Navbar />
        </div>
        <div className="landing-body">
          <div className="landing-body text">Software Solutions</div>
        </div>
        <div className="content-wrapper">
          <Home id="home" />
          <About id="about" />
          <Projects id="projects" />
          <Blog id="blog" />
        </div>
      </div>
    </div>
  );
}

export default App;
