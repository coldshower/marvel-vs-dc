import React from 'react';
import RosterBox from './RosterBox.js';
import './Roster.scss';

export default ({ currentRoster, side }) => {
	return (
		<div className={ "roster roster-" + side } >
			{
				currentRoster.map(hero => {
					return (
						<RosterBox key={hero.boxUrl} hero={ hero } />
					);
				})
			}
		</div>
	);
}