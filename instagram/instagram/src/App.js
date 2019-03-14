import React, { Component } from 'react';
import dummyData from "./dummy-data"
import './App.css'

import PostContainer from './components/PostContainer'
import SearchBar from './components/SearchBar'

class App extends Component {
  constructor() {
    super()
    this.state = {
      posts: dummyData
    }
  }
  render() {
    console.log(this.state.posts)
    return (
      <div className="container">
        <SearchBar />
        <div>
          <PostContainer posts = {this.state.posts} />

        </div>
      </div>
    );
  }
}

export default App;
