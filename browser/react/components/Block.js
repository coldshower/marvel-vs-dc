import React from 'react';
import '../../scss/Block.scss';
import Roster from './roster/Roster.js';
import BigScreen from './BigScreen.js';

export default ({ currentHero, currentRoster, side }) => {
  return (
    <div className="block">
      <BigScreen currentHero={ currentHero } side={ side } />
      <Roster currentRoster={ currentRoster } />
    </div>
  );
}