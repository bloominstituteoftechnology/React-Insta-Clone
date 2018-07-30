import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import { Button, Container } from 'reactstrap';


class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData
    };
  }
  render() {
    return (
      <Container>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      </Container>
    );
  }
}

Container.propTypes = {
  fluid:  PropTypes.bool
}

export default App;
