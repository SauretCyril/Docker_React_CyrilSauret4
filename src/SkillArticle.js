import React from 'react';
import './styles/article.css';
import './styles/skillCard.css';

const SkillArticle = ({ skill }) => {
  return (
    <article id={skill.id} className="article active">
      <div className="article-header">
        <h1>{skill.title}</h1>
        <p>{skill.description}</p>
      </div>
      <div className="article-content">
        <img src="https://picsum.photos/800/400?random=9" alt="" className="article-image" />
        <ul>
          <li>Surface adaptée aux sports collectifs</li>
          <li>Gradins mobiles</li>
          <li>Vestiaires équipés</li>
          <li>Sonorisation professionnelle</li>
          <li>Éclairage adapté aux retransmissions</li>
        </ul>
      </div>
    </article>
  );
};

export default SkillArticle;