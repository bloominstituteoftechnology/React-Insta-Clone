import React, { Component } from 'react';
import './App.css';
import SearchBar from "./components/SearchBar/SearchBar.js";
import dummyData from "./dummy-data.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <p>{dummyData}</p>
      </div>
    );
  }
}

export default App;
