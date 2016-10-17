import React from 'react';
import HeroBox from './HeroBox.js';
import './HeroSelect.scss';

export default ({ heroes, changeCurrentHero, resetCurrentHero, addToRoster }) => {
  return (
    <div id="hero-select">
      {
        heroes.map(hero => (
          <HeroBox 
            key={ hero.name } 
            hero={ hero } 
            onMouseEnter={ () => changeCurrentHero(hero) }
            onMouseLeave={ () => resetCurrentHero() }
            onClick={ () => addToRoster(hero) }
          />
        ))
      }
    </div>
  );
}