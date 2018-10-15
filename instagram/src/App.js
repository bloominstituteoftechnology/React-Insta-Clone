import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';


class App extends Component {
  constructor() {
    super();
      this.state = {
        data: []
  }
}
  






  render() {
    return (
      <div className="App">
        <h1>Testing</h1>
        <SearchBar />
      </div>
    );
  }
}

export default App;
