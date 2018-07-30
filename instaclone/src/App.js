import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data.js'


class App extends Component {
  constructor() {
    super();
    this.state = {
      data:dummyData
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="app-list">
          {this.state.data.map()}
        </p>
      </div>
    );
  }
}

export default App;
