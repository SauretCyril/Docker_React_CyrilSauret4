import React from 'react';
import './styles/skill.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="skill-card floating">
      <div className="skill-icon">
        <img src={project.icon} alt={`${project.name} icon`} />
      </div>
      <p>{project.name}</p>
    </div>
  );
};

export default ProjectCard;