import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
class App extends Component {
  constructor() {
    super();
    this.state = {
      instagramData: dummyData
    };
  }
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
