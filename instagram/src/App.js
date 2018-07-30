import React, { Component } from 'react';
import "./App.css";
import dummyData from './dummy-data.js';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData 
    };
  }
 
  render() {
    return (
      <div>
      <SearchBar />
      </div>
    );
  }
}

export default App;
