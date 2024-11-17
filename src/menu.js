import React from 'react';
import './styles/menu.css';
const Menu = () => {
  return (
    <nav>
      <a href="#organiser" className="nav-link">
        <i className="fas fa-calendar-plus"></i> Organiser
      </a>
      <ul className="submenu">
        <li className="submenu-item">
          <a href="#Ici3Dn" className="submenu-link" data-article="Ici3Dn">
            <i className="fas fa-microphone submenu-icon"></i>
            Ici3Dn
          </a>
        </li>
        <li className="submenu-item">
          <a href="#salons" className="submenu-link" data-article="salons">
            <i className="fas fa-booth submenu-icon"></i>
            Salons & Expositions
          </a>
        </li>
        <li className="submenu-item">
          <a href="#sports" className="submenu-link" data-article="sports">
            <i className="fas fa-running submenu-icon"></i>
            Événements Sportifs
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;