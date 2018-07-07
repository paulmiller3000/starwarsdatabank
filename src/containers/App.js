import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      starships: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/starships/')
      .then(response=> response.json())
      .then(starships=> this.setState({starships}));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render() {
    const { starships, searchfield } = this.state;
    const filteredStarships = starships.filter(starship => {
      return starship.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    return !starships.length ?
      <h1>Loading</h1> :
      (
        <div className="tc">
          <h1 className='f1'>Star Wars Database</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <CardList starships={filteredStarships} />
        </div>
      );
  }
}

export default App;
