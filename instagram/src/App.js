import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: []
    };
  }
  
  
  
  
  
  
  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.dummyData.map(x => <PostContainer data={x}/>)}
      </div>
    );
  }
}

export default App;
