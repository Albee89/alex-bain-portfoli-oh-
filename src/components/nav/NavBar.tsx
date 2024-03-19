import React, { useState } from 'react';
import './navbar.css'; 
import About from '../about/About';
import Contact from '../contact/Contact';
import Media from '../media/Media';
import Projects from '../projects/Projects';
import Content from '../content/Content';

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);

  return (
    <div className="navbar">
      {/* Apply hover effect and different shades of pink and purple using CSS */}
      <div
        className={`navbar-item pink ${hoveredItemId === '#about' ? 'hovered' : ''}`}
        id="#about"
        onMouseEnter={() => setHoveredItemId('#about')}
        onMouseLeave={() => setHoveredItemId(null)}
      >
        <h1>About</h1>
        {hoveredItemId === '#about' && <About />}
      </div>
      <div
        className={`navbar-item purple ${hoveredItemId === '#contact' ? 'hovered' : ''}`}
        id="#contact"
        onMouseEnter={() => setHoveredItemId('#contact')}
        onMouseLeave={() => setHoveredItemId(null)}
      >
        <h1>Contact</h1>
        {hoveredItemId === '#contact' && <Contact />}
      </div>
      <div
        className={`navbar-item pink ${hoveredItemId === '#projects' ? 'hovered' : ''}`}
        id="#projects"
        onMouseEnter={() => setHoveredItemId('#projects')}
        onMouseLeave={() => setHoveredItemId(null)}
      >
        <h1>Projects</h1>
        {hoveredItemId === '#projects' && <Projects />}
      </div>
      <div
        className={`navbar-item purple ${hoveredItemId === '#media' ? 'hovered' : ''}`}
        id="#media"
        onMouseEnter={() => setHoveredItemId('#media')}
        onMouseLeave={() => setHoveredItemId(null)}
      >
        <h1>Media</h1>
        {hoveredItemId === '#media' && <Media />}
      </div>
      <div
        className={`navbar-item pink ${hoveredItemId === '#content' ? 'hovered' : ''}`}
        id="#content"
        onMouseEnter={() => setHoveredItemId('#content')}
        onMouseLeave={() => setHoveredItemId(null)}
      >
        <h1>Content</h1>
        {hoveredItemId === '#content' && <Content />}
      </div>
    </div>
  );
};

export default NavBar;
