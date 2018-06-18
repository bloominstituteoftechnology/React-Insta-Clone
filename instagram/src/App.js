import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar'
import './App.css';
import data from '../dummy-data'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: data
    }
  }
  render() {
    return (
      <div className="app-container">
        <SearchBar />
      </div>
    );
  }
}

export default App;
