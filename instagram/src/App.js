import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      instacloneData: dummyData
  }
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
