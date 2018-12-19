import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData
    }
  }






  render() {
    return (
      <div className="App">       
       Hi Hi Buddy
       <SearchBar />
      </div>
    );
  }
}

export default App;
