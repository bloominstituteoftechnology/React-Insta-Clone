import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './Components/SearchBar.js';


class App extends Component {
  constructor(){
    super();
    this.state = {
      profile: []
    };


  }
  render() {
    return (
      <SearchBar className="fab fa-instagram"/>
    );
    
    
  }
}

export default App;
