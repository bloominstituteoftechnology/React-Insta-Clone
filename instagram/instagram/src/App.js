import React, { Component } from 'react';
import dummyData from "./dummy-data"
import './App.css'

import PostContainer from './components/PostContainer'

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
      <div>
        <div>
          <PostContainer posts = {this.state.posts} />

        </div>
      </div>
    );
  }
}

export default App;
