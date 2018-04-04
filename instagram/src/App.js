import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import searchBar from './components/SearchBar/SearchBar.js';


class App extends Component {
  constructor () {
    super();
    this.state = {
      insta: "",
    }
  }
  render() {
    return (
      <div>
        <searchBar />
        <h3>Insta</h3>
        </div>
    );
  }
}

export default App;

