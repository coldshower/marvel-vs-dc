import React from 'react';
import '../../scss/BigScreen.scss';

export default ({ currentHero, side }) => {
  return (
    <div className={ "big-screen screen-" + side }>
      <img src={ currentHero.bigUrl } />
    </div>
  );
}