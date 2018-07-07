import React, { Component } from 'react';
import StarshipCardList from '../components/StarshipCardList';
import SearchBox from '../components/SearchBox';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      chars: [],
      searchfield: ''
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

  render() {
    const { chars, searchfield } = this.state;
    const filteredChar = chars.filter(char => {
      return char.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    return !chars.length ?
      <h1>Loading</h1> :
      (
        <div className="tc">
          <h1 className='f1'>Star Wars Database</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <StarshipCardList starships={filteredChar} />
        </div>
      );
  }
}

export default App;
