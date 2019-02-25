import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import instagram2 from './dummy-data.js'



class App extends Component {
  constructor() {
    // responsible for setting up the component's state
    super();
    this.state = {
      instagram2: instagram2
      // instagram2: dummyData
  };
}
}

export default App;
