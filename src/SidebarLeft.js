import React, { useEffect, useState } from 'react';
import SkillCard from './SkillCard';
import './styles/sidebar.css';

const SidebarLeft = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch('./data/skills.json')
      .then(response => response.json())
      .then(data => setSkills(data))
      .catch(error => console.error('Error loading skills:', error));
  }, []);

  return (
    <aside className="sidebar sidebar-left">
      <section className="section">
        <h2 className="section-title">Mes Compétences</h2>
        <div className="skills-grid" id="SK-competences">
          {skills.map(skill => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </section>
    </aside>
  );
};

export default SidebarLeft;