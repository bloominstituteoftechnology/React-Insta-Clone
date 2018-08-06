import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import dummyData from './dummy-data';

console.log(dummyData);


class App extends Component {
    constructor(){
      super();
      this.state = {
        dummyData: 'dummyData',
      }
    }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Instagram</h1>
        </header>
      
      </div>
    );
  }
}

export default App;
