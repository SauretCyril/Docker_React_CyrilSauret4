import React from 'react';
import './styles/slidePhoto.css';
import './styles/article.css';


const SlidePhoto = () => {
  return (
    <article id="slide-photo" className="article">
      <div className="hero-slide active" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url('https://picsum.photos/1920/1080?random=1')" }}></div>
      <div className="hero-slide" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url('https://picsum.photos/1920/1080?random=2')" }}></div>
      <div className="hero-slide" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url('https://picsum.photos/1920/1080?random=3')" }}></div>
    </article>
  );
};

export default SlidePhoto;