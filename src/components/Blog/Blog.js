import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import './Blog.scss';

const Blog = ({ id }) => {
  return (
    <div id={id} className="content-blog-wrapper">
      <h1>blog</h1>
      <div className="content-blog-items-bin-one">
        <div className="content-blog-one">
          <div className="project-img"></div>
          <a
            href="https://michaelarn0ld.medium.com/i-fell-in-love-with-code-leaping-from-chemical-engineering-to-software-development-9ccac9f430a7"
            target="_blank"
            className="navbar-left-media-links"
          >
            <div className="project-description">
              <h1>
                <i class="fas fa-file-code"></i>
              </h1>
              <h3>
                I fell in love with code — Leaping from Chemical Engineering to
                Software Development.
              </h3>
            </div>
          </a>
        </div>
        {/* -------------------------------------- */}
        <div className="content-blog-two">
          <div className="project-img"></div>
        </div>
        <div className="content-blog-three">
          <div className="project-img"></div>
        </div>
      </div>
      <div className="content-blog-items-bin-two">
        <h1 onClick={() => scroll.scrollToTop()}>
          <i class="fas fa-chevron-circle-up"></i>
        </h1>
        <div className="content-blog-items-media">
          <a
            href="https://github.com/michaelarn0ld"
            target="_blank"
            className="blog-media-links"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/michaelarnoldcpp"
            target="_blank"
            className="blog-media-links"
          >
            <i className="fab fa-linkedin"> </i>
          </a>
          <a
            href="https://twitter.com/michaelarn0ld_"
            target="_blank"
            className="blog-media-links"
          >
            <i className="fab fa-twitter-square"> </i>
          </a>
          <a
            href="https://michaelarn0ld.medium.com/"
            target="_blank"
            className="blog-media-links"
          >
            <i class="fab fa-medium"></i>
          </a>
          <a
            href="https://twitter.com/michaelarn0ld_"
            target="_blank"
            className="blog-media-links"
          >
            <i class="fab fa-youtube"></i>
          </a>
        </div>

        <h4>&#169; Michael Arnold 2021</h4>
      </div>
    </div>
  );
};

export default Blog;
