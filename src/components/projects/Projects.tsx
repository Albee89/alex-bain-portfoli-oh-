import React from "react";
import "./projects.css";

interface ProjectsProps {
  
}

const Projects: React.FC<ProjectsProps> = (props) => {
  return (
    <div className="Projects" id="projects">
      <button className="github-button"><a href="https://www.github.com/Albee89">Gitting Jiggy</a></button>
      <button className="github-button"><a href="https://www.figma.com/files/recents-and-sharing?fuid=1277673635442952991">Getting Figgy</a></button>
    </div>
  );
};

export default Projects;
