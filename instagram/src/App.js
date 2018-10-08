import React, { Component } from 'react';
import SearchBar from "./components/SearchBar/SearchBar"
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './App.css';

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
