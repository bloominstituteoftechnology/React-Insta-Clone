import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import Gram from './Components/PostContainer.js';
import Bar from './Components/SearchBar.js';







class App extends Component {
constructor() {
  super();
  this.state = {
    dummyData: []
  };
}
componentDidMount(){
  this.setState({ dummyData: dummyData })
}
  render() {
    return (
      <div className="App">
      <Bar />
        <Gram full={this.state.dummyData} />
      </div>
    );
  }
}

export default App;
