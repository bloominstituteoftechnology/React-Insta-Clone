import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import PostContainer from './PostContainer/PostContainer';
import dummyData from './dummy-data';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: dummyData,
      test: 'hi'
    }
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
