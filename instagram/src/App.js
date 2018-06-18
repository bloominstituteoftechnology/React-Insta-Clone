import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <SearchBar />
      </div>
    );
  }
}

export default App;
