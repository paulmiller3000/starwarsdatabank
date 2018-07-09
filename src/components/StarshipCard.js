import React from 'react';
import './StarshipCard.css'; 

class StarshipCard extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e) {
		e.preventDefault();
	}

	closeCard(id, event) {	
		console.log('id');
		const ele = document.getElementById(id);		
		const x = document.getElementById(id).children[0];	
		const detailBtn = ele.querySelector('.card-detail-btn');	
		const darkDiv = document.createElement('div');

		// Return card to normal state
		ele.classList.remove('card-enlarged');
		x.classList.add('hide');
		detailBtn.classList.remove('hide');

		// Lighten the background
		document.getElementById('root').removeChild(darkDiv);		
	}

  
	detailCard(id, event) {			
		const ele = document.getElementById(id);		
		const x = document.getElementById(id).children[0];	
		const detailBtn = ele.querySelector('.card-detail-btn');	
		const darkDiv = document.createElement('div');

		// Darken the background
		darkDiv.className = 'dark';
		document.getElementById('root').appendChild(darkDiv);

		// Enlarge the card, show close button, remove detail link
		ele.classList.add('card-enlarged');
		x.classList.remove('hide');
		detailBtn.classList.add('hide');
	}

	render() {
		return (
				<div 
					id={'card-starship-' + this.props.id} 
					onClick={(e) => this.detailCard('card-starship-' + this.props.id)} 
					className='card tc dib ba br3 pa2 grow bw2 shadow-5 ttc glow'
				>				
					<div className='close-btn hide'>
						<p className='fr' onClick={(e) => this.closeCard()}>x</p>
					</div>
					<div>
						<h2>{this.props.name}</h2>
						<p>Model: {this.props.model}</p>
						<p className='i'>Manufacturer: {this.props.manufacturer}</p>
						<p className='card-detail-btn'>[ Detail ]</p>	
					</div>					
			        <div className='card-detail hide'>
			        	<p>Detail goes here</p>	        	
			      	</div>						
				</div>
			)		
		}
}


export default StarshipCard