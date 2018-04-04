import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data'
import SearchBar from './components/searchBar/searchBar.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      profile: []
    };
  }

  componentDidMount() {
    // 'fetch' our cities data.
    // set cities on state for use in CitiesList
    this.setState({ profile:  dummyData});
  }
  render() {
    return (
      <div className="App">
        <SearchBar input='input' logo='logo' iconContainer="iconContainer" icon="fab fa-instagram icon" Container="Container"/>
      </div>
    );
  }
}

export default App;
