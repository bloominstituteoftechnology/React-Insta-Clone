import React, { Component } from 'react';
import './App.css';

import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      postData: dummyData
    }
  }

  render() {
    return (
      <div className="App">
        <h2>Hello world!</h2>
      </div>
    );
  }
}

export default App;
