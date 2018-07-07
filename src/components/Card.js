import React from 'react';

const Card = ({name, model, manufacturer}) => {
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<div>
				<h2>{name}</h2>
				<p>{model}</p>
				<p>{manufacturer}</p>
			</div>
		</div>
	);
}

export default Card