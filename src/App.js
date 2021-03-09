import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <div className="App">
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
