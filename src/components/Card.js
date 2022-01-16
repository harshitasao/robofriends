import React from 'react';

const Card =({name , email , id}) =>{
	// const {name,id,email} =props; // destructuring do either this or the above method
	return (
		//jsx code

		<div className ='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
		<img alt='...' src={`https://robohash.org/${id}?200x200`} />
		   <div>
		   <h2>{name}</h2>
		   <p>{email}</p>
		   </div>
		</div>
		);
}

export default Card;