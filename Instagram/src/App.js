import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData = { props.dummyData.map(data => <Data />) }
    };
  }

  render() {
    return (
      <div className="App">
        <dummyData data={this.state.dummyData} />
      </div>
    );
  }
}

export default App;
