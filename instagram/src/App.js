import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js'
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data:dummyData
    }
  }
  render() {
    return (
      <div className="app-container">
       {this.state.data.map( postObj =>  <PostContainer key={postObj.timestamp} postObj={postObj}/>)}
      </div>
    );
  }
}

export default App;
