import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar.js'


class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <div className="App">
        <header>
        <SearchBar />
        </header>
    
      </div>
    );
  }
}


export default App;
