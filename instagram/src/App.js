import React, { Component } from 'react';
import './App.css';

// data
import dummyData from './dummy-data';

// components
import { SearchBarContainer } from './components/SearchBar/SearchBarContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBarContainer />
      </div>
    );
  }
}

export default App;
