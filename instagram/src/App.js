import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchContainer from './components/SearchBar/SearchContainer';
class App extends Component {
  constructor() {
    super();
    this.state = {
      instaData: dummyData
    };
  }
  render() {
    return (
      <div className="App">
        <SearchContainer />
      </div>
    );
  }
}

export default App;
