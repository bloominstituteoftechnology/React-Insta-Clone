import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data.js';
import SearchBar from './components/SearchBar/SearchBar';


class App extends Component {
  constructor() {
    super();
    this.state = {
        posts: dummyData
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
