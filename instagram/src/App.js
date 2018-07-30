import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js'
import SearchBar from './Components/SearchBar/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
      </div>
    );
  }
}

export default App;
