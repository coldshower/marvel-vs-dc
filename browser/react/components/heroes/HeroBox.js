import React from 'react';
import './HeroBox.scss';

export default ({image}) => {
  return (
    <div>
      <img src={ image.src } />
    </div>
  );
}