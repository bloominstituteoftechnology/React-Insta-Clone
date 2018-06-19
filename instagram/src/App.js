import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js'
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data:dummyData
    }
  }
  render() {
    return (
      <div>
        <SearchBar />
        <div className="app-container">
          {this.state.data.map( postObj =>  <PostContainer key={postObj.timestamp} postObj={postObj}/>)}
       </div>
      </div>
    );
  }
}

export default App;
