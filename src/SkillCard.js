import React from 'react';
import './styles/skillCard.css';

const SkillCard = ({ skill }) => {
  return (
    <div className="skill-card floating">
      <div className="skill-icon">
        <img src={skill.icon} alt={`${skill.type} logo`} />
      </div>
      <p>{skill.type}</p>
    </div>
  );
};

export default SkillCard;