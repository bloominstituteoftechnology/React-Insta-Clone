import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './Components/SearchBar/SearchBar';
import PostContainer from './Components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      post : [dummyData]
    };
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer post={this.state.post} />
      </div>
    );
  }
}


export default App;
