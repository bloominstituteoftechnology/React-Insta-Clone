import React, { Component } from 'react';
import './App.css';
// import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        
          <h1 className="App-title">Instagram</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
// <img src={logo} className="App-logo" alt="logo" />