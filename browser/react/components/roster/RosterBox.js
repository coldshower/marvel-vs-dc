import React from 'react';
import './RosterBox.scss';

export default ({ hero }) => {
	return (
		<div className="roster-box">
			<img src={ hero.smallUrl } />
		</div>
	);
}