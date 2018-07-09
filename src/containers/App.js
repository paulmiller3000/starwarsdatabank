import React, { Component } from 'react';
import StarshipCardList from '../components/StarshipCardList';
import SearchBox from '../components/SearchBox';
import Footer from '../components/Footer';
import './App.css';
import './stars.css';
import '../components/StarshipCard.css';

class App extends Component {
  constructor() {
    super()
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      chars: [],
      searchfield: '',
      isHovering: false
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/starships/')
      .then(response=> response.json())
      .then(returnedObj=> this.setState({chars: returnedObj.results}));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

// Hover source: https://stackoverflow.com/questions/44566340/show-a-component-on-hover-in-reactjs
  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  render() {
    const { chars, searchfield } = this.state;
    const filteredChar = chars.filter(char => {
      return char.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    return !chars.length ?
      (
        <div>
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>          

          <div className="tc">
            <h1 className='f1 tc'>Loading...</h1>
          </div>
        </div>
      ) 
      :      
      (
        <div id='app' className='vh-100 overflow-y-scroll'>
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>          

          <div className="tc">
            <h1 className='f1'>Star Wars <span className='center pt3'>Databank</span></h1>
            <SearchBox searchChange={this.onSearchChange} />
            <div className="center">
              <StarshipCardList starships={filteredChar} />
            </div>
          </div>
          <Footer />          
        </div>
      );
  }
}

export default App;
