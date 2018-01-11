import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

import dummyData from './dummy-data';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      posts: dummyData
    }
  }

  render() {
    return (
      <div>
        <SearchBar />
        {this.state.posts.map((post, index) => {
          return (
            <PostContainer postData={post} key={index} />
          )
        })}
      </div>
    );
  }
}

export default App;
