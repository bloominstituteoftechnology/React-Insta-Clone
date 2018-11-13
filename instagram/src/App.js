import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer'


class App extends Component {

  constructor() {
    super();
    this.state = {
      data:dummyData
    };
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <div className="insta-container"> 
          </div>
        </header>
      </div>
    );
  }
}

export default App;
