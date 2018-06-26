import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
  }
  render() {
    return (
     <div className="App">App</div> 
    )}   
}

export default App;
