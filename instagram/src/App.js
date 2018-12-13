import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js'
import PostContainer from './components/postContainer';

class App extends Component {
  constructor(){
    super();
    this.state = {
      dummyData: dummyData
    };
    
  }
  render() {
    return (
      <div className="App">
        <PostContainer posts = {this.state.dummyData} />
      </div>
    );
  }
}

export default App;
