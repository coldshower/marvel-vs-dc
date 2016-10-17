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
	}

  changeCurrentHero (hero) {
    this.setState({
      currentHero: hero
    });
  }

	render () {
    const { heroes, currentHero, changeCurrentHero } = this.state;
		return (
			<div id="main">
        <Block currentHero={ currentHero }/>
        <HeroSelect 
          heroes={ heroes } 
          changeCurrentHero={ changeCurrentHero }
        />
        <Block currentHero={ {} } />
			</div>
		);
	}
}