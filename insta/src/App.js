import React, { Component } from 'react';
import './App.css';
import SearchBar from "./components/SearchBar/searchBar";


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
