import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import logo from './logo.svg';
import './App.css';

class App extends Component {



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      <div className='SearchBar'>
      <SearchBar />
      </div>
      
      </div>
    );
  }
}

export default App;
