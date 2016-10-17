import React from 'react';
import RosterBox from './RosterBox.js';
import './Roster.scss';

export default ({ currentRoster }) => {
  console.log(currentRoster);
	return (
		<div className="roster">
			{/*
				currentRoster.map(hero => {
					return (
						<RosterBox key={hero.name} hero={ hero } />
					);
				})
			*/}
		</div>
	);
}