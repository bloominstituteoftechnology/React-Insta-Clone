import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.css';
import SearchBar from '../instagram/components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super()

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
