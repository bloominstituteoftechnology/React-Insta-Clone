import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data.js';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      instaFeed: []
    }
  }

  componentDidMount(){
    this.setState({ instaFeed: dummyData}); // here we are setting empty people array to people array in people.js. 
  }

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
      </div>
    );
  }
}

export default App;
