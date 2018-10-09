import React, { Component } from 'react';
import logo from './logo.svg';
import dummyData from './dummy-data.js';

import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
console.log(dummyData)
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
