import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from 'reactstrap';


class App extends Component {
  render() {
    console.log(dummyData);
    return (
      <div className="App">
        <header className="App-header">
          <Navbar><ul><li>asdfasdf</li></ul></Navbar>  
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
