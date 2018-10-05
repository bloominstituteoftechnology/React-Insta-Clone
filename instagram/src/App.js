import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBarComponent from './components/SearchBar/SearchBarComponent'



class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBarComponent />
      </div>
    );
  }
}

export default App;
