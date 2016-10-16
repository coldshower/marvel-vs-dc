import React from 'react';
import LeftBlock from './LeftBlock.js';
import RightBlock from './RightBlock.js';
import HeroSelect from './heroes/HeroSelect.js';
import '../../scss/Main.scss';

export default class Main extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div id="main">
        <LeftBlock/>
        <HeroSelect />
        <Rightblock />
			</div>
		);
	}
}