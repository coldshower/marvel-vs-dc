import React from 'react';
import Block from './Block.js';
import HeroSelect from './heroes/HeroSelect.js';
import initialState from '../initialState.js';
import '../../scss/Main.scss';

export default class Main extends React.Component {
	constructor (props) {
		super(props);
    this.state = initialState;
    this.changeCurrentHero = this.changeCurrentHero.bind(this);
    this.addToRoster = this.addToRoster.bind(this);
    this.resetCurrentHero = this.resetCurrentHero.bind(this);
	}

  changeCurrentHero (hero) {
    this.setState({
      currentHero: hero
    });
  }

  resetCurrentHero (hero) {
    this.setState({
      currentHero: {}
    });
  }

  addToRoster (hero) {
    const { currentRoster } = this.state;
    // if (currentRoster.length < 3) {
    //   this.setState({
    //     currentRoster: currentRoster.concat([hero])
    //   });
    // } else {
    //   this.setState({
    //     currentRoster: [hero]
    //   });
    // }
  }

	render () {
    const { heroes, currentHero, currentRoster } = this.state;
		return (
			<div id="main">
        <Block currentHero={ currentHero } currentRoster={ currentRoster } side="left" />
        <HeroSelect 
          heroes={ heroes } 
          changeCurrentHero={ this.changeCurrentHero }
          resetCurrentHero={ this.resetCurrentHero }
          addToRoster={ this.addToRoster }
        />
        <Block currentHero={ {} } side="right" />
			</div>
		);
	}
}