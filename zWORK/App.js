import React, { Component } from 'react';
import logo from './D2rdroid1.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <h1>Welcome to Animals</h1>
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
        <div>
        <Animals animals={animals} />
        <Me name="David" age={6.5} occupation="Solutions Desiger" />
          </div>
        <span>{animal.species}</span>
        <Animals animal={animals} />
      </div>
    );
  }
}

export default App;
