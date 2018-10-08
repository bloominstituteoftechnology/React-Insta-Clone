import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from "./components/SearchBarContent/SearchBar"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="top-header">
          <logo />
          <SearchBar />
        </div>
      </div>
    );
  }
}

export default App;
