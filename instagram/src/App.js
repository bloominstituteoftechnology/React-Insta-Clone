import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBarComponent/search-bar';
import Card from './components/PostComponent/card';

class App extends Component {
  constructor (){
    super()
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <div className="header">
          <SearchBar />
        </div>
        <div className="middle">
          <Card />
        </div>
      </div>
    );
  }
}

export default App;
