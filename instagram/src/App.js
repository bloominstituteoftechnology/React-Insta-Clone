import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <hr />
      </div>
    );
  }
}

export default App;
