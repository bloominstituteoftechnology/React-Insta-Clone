import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import Searchbar from './components/SearchBar/SearchBar'

class App extends Component {
  render() {
    return (
      <div>
        <Searchbar />
      </div>
    );
  }
}

export default App;
