import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar';
import PostContainer from './components/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummydata: dummyData
    }
  }
  render() {
    return (
      <div className="App">
          <SearchBar />
          {this.state.dummydata.map(post=> <PostContainer key={this.timestamp} values= {post} />)}
      </div>
    );
  }
}

export default App;
