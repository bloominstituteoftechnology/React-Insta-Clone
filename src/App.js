import React, { Component } from 'react'
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js';
import dummyData from './dummy-data.js';

class App extends Component {
  constructor(prop){
    super();
    this.state = dummyData;
    
  }
  render() {
    return (
      <div className="App">
      <SearchBar />
      </div>
    );
  }
}

export default App;
