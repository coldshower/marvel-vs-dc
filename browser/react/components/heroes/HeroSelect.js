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
            changeCurrentHero={ changeCurrentHero }
            resetCurrentHero={ resetCurrentHero }
            addToRoster={ addToRoster }
          />
        ))
      }
    </div>
  );
}