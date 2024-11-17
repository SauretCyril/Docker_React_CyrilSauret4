import React from 'react';
import './styles/header.css';

const Header = () => {
  return (
    <header className="site-header">
      <div className="header">
        <div className="header-content">
          <div className="logo-contenaire">
            <div className="name">Cyril SAURET</div>
            <div><img src="/web/ressources/profile_2.png" className="logo" alt="Cyril SAURET" /></div>
          </div>
          <div className="logo-contenaire">
            <h1 className="portfolio-title">Ingénieur Etudes et Développements en Informatique</h1>
          </div>
          <div className="contact-info">
            <div><i className="fas fa-phone contact_text"></i> 07 86 09 87 81</div>
            <div><i className="fas fa-envelope contact_text"></i> sauretcyril@outlook.fr</div>
          </div>
        </div>
        <div className="quote-container">
          <p id="quote-content">Chargement de la citation...</p>
        </div>
      </div>
    </header>
  );
};

export default Header;