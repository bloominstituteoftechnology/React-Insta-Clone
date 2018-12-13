import React, { Component } from 'react';
import dummyData from './dummy-data';

import SearchBar from './Components/SearchBar/SearchBar'

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state ={
      dummyData:dummyData
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
//do type check at the place you need to display