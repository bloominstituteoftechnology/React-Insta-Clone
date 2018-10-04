import React, { Component } from 'react';
import logo from './D2rdroid1.png';
import './App.css';
import './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      instaClonePosts: [],
    };
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <h1>Welcome to D2rd-O-Gram</h1>
          </p>
          <a
            className="App-link"
            href="https://linkedin.com/in/gddaniel"
            target="_blank"
            rel="noopener noreferrer"
          >
            About Me
          </a>
        </header>
      </div>
    );
  }
}

export default App;
