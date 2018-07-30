import React, { Component } from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import './App.css';



class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData,
    }
  }

  render() {
    return (
      <div className="App">
        <SearchBar/>
      </div>
    );
  }
}

export default App;
