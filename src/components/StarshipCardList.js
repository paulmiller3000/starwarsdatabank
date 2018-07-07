import React from 'react';
import StarshipCard from './StarshipCard';

const CardList = ({ starships }) => {
	return (
		<div>
		{
			starships.map((starship, i) => {
				return (
					<StarshipCard
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