import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <header className="App-header">
          <h1 className="App-title">Welcome to Cool Instagram</h1>
        </header>
        <p className="App-intro">
          Here is some random stuff
        </p>
      </div>
    );
  }
}

export default App;
