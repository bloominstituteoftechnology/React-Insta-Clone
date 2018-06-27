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
        this.state.posts.map(posts => {
          return
        })
        <p className="App-intro">
          Name: {}
        </p>
      </div>
    );
  }
}

export default App;
// <img src={logo} className="App-logo" alt="logo" />