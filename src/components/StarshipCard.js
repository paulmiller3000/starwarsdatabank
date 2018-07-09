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
  
	detailCard(id, event) {			
		const ele = document.getElementById(id);
		//const divs = document.querySelectorAll('div:not(id)')		
		const x = document.getElementById(id).firstChild;		

		//divs.classList.add('dark')
		ele.classList.add('card-enlarged')		
		x.classList.remove('hide')
	}

	render() {
		return (
				<div id={'card-starship-' + this.props.id} onClick={(e) => this.detailCard('card-starship-' + this.props.id)} className='card tc dib ba br3 pa2 grow bw2 shadow-5 ttc glow'>				
					<div className='close-btn fr hide'>
						x
					</div>
					<div>
						<h2>{this.props.name}</h2>
						<p>Model: {this.props.model}</p>
						<p className='i'>Manufacturer: {this.props.manufacturer}</p>
						<p className='card-detail-btn'>[ Detail ]</p>	
					</div>					
			        <div class='card-detail hide'>
			        	<p>Detail goes here</p>	        	
			      	</div>						
				</div>
			)		
		}
}


export default StarshipCard