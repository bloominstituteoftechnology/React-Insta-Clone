import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {};
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
