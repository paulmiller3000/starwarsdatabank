import React from 'react';
import StarshipCard from './StarshipCard';
import './StarshipCardList.css';

const CardList = ({ starships }) => {
	return (
		<div className='card-list flex flex-wrap justify-center'>
		{
			starships.map((starship, i) => {
				return (
					<StarshipCard
						key={i}
						id={i}
						name={starships[i].name}
						model={starships[i].model}
						manufacturer={starships[i].manufacturer}
						cost_in_credits={starships[i].cost_in_credits}
						length={starships[i].length}
						max_atmosphering_speed={starships[i].max_atmosphering_speed}
						crew={starships[i].crew}
						passengers={starships[i].passengers}
						cargo_capacity={starships[i].cargo_capacity}
						consumables={starships[i].consumables}
						hyperdrive_rating={starships[i].hyperdrive_rating}
						MGLT={starships[i].MGLT}
						starship_class={starships[i].starship_class}
						pilots={starships[i].pilots}
					/>
				);
			})
		}
		</div>
	);
}

export default CardList;