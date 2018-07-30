import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data'; 


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div>
        <i class="fab fa-instagram">   &#124;</i> <span>Instagram</span> <input placeholder="search"/> <i class="far fa-heart"></i> <i class="far fa-user"></i>
        </div>
        </header>
        
      </div>
    );
  }
}

export default App;
