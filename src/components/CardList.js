import React from 'react';
import Card from './Card';

const CardList = ({ starships }) => {
	return (
		<div>
		{
			starships.map((starship, i) => {
				return (
					<Card
						key={i}
						name={starships[i].name}
						model={starships[i].model}
						manufacturer={starships[i].manufacturer}
					/>
				);
			})
		}
		</div>
	);
}

export default CardList;