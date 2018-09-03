import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js'
class App extends Component {
  render() {
    return (
      <div className="App">
      <SearchBar />
      </div>
    );
  }
}

export default App;
