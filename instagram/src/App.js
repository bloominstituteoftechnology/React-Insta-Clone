import React, { Component } from 'react';
import SearchBar from '../src/Components/SearchBar';
import dummyData from './dummy-data';
import PostContainer from './Components/PostContainer';
import Post from './Components/Post';


class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: []
    };
  }

  render() {
    return (
      <div className='app-wrap'>
        <SearchBar />
        <Post />
      </div>
    );
  }
}

export default App;
