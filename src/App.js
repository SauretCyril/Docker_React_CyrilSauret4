import React from 'react';
import Header from './Header';
import SidebarLeft from './SidebarLeft';
import SidebarRight from './SidebarRight';
import MainContent from './MainContent';
import SlidePhoto from './SlidePhoto';
import SkillArticle from './SkillArticle';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SidebarLeft />
      <MainContent />
      <SlidePhoto />
      <SidebarRight />
      {skills.map(skill => (
        <SkillArticle key={skill.id} skill={skill} />
      ))}
      {/* Ajoutez d'autres composants ici */}
    </div>
  );
}

export default App;