import React, { Component } from 'react';
import './App.css';
import data from './dummy-data';

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: data
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Instagram</h1>
        </header>
      </div>
    );
  }
}

export default App;
