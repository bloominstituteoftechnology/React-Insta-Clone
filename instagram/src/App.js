import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData  from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: dummyData
    };
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer data={this.state.data} />
      </div>
    );
  }
}

export default App;
