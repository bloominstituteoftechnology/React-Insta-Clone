import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBarComponent/search-bar';

class App extends Component {
  constructor (){
    super()
    this.state = {

    }
  }
  render() {
    return (
      <div className="header">
        <SearchBar />
      </div>
    );
  }
}

export default App;
