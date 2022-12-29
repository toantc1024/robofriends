import React from 'react';
import Card from './Card';
 
const CardList = ({robots}) => {
	const cardsArray = robots.map((robot, index) => (
		<Card 
			key={index} 
			id={robot.id} 
			name={robot.name} 
			username={robot.username} 
			email={robot.email} 
		/>
	));
	return (
	<div>
		{cardsArray}
    </div>
	);
}

export default CardList;
