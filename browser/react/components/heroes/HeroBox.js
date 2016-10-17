import React from 'react';
import './HeroBox.scss';

export default ({ hero, changeCurrentHero, resetCurrentHero, addToRoster }) => {
  return (
    <div 
      className="hero-box"
      onMouseEnter={ () => changeCurrentHero(hero) }
      onMouseLeave={ () => resetCurrentHero() }
      onClick={ () => addToRoster(hero) }
    >
      <div className="unhovered" />
      <img src={ hero.boxUrl } />
    </div>
  );
}