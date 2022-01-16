import React from 'react';
import Card from './Card';

//this cardlist is a pure function i.e it is deterministic ,means it always takes same input and gives same kind of output
const CardList = ({robot}) => {
	const cardArray = robot.map((user,i) => {
		return  (<Card key={robot[i].id} 
				id = {robot[i].id} 
				name = {robot[i].name} 
				email = {robot[i].email}/>
				);
	}) ;

	return (
		  <div>
		  {cardArray}
		  </div>

	);
}
export default CardList;