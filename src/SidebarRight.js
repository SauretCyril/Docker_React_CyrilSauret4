import React, { useEffect, useState } from 'react';
import ProjectCard from './_ProjectCard';

import './styles/sidebar.css';
import Menu from './menu'; // Import the Menu component

const SidebarRight = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('./data/projects.json')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error loading projects:', error));
  }, []);

  return (
    <aside className="sidebar sidebar-right">
      <section className="section">
        <h2 className="section-title">Mes Projets</h2>
        <div className="card-grid" id="SK-projects">
          {projects.map(project => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>
      <Menu /> {/* Insert the Menu component here */}
    </aside>
  );
};

export default SidebarRight;