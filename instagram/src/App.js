import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostSection from './components/PostSection/PostSection';


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData,
    }
  }
  render() {
    return (
      <div className="App">
        <PostSection data = {this.state.data}/>
      </div>
    );
  }
}

export default App;
