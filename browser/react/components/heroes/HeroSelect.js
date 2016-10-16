import React from 'react';
import HeroBox from './HeroBox.js';
import './HeroSelect.scss';

export default ({ images }) => {
  return (
    <div>
      {
        images.map(image => {
          return (
            <HeroBox image={ image } />
          );
        })
      }
    </div>
  );
}