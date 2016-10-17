import React from 'react';
import './HeroBox.scss';

export default ({ hero }) => {
  return (
    <div className="hero-box">
      <div className="unhovered" />
      <img src={ hero.smallUrl } />
    </div>
  );
}