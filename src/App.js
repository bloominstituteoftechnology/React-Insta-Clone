import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchbarContainer from "./components/SearchBar/SearchbarContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchbarContainer />
      </div>
    );
  }
}

export default App;
