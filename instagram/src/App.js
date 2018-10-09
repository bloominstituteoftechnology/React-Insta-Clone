import React, { Component } from 'react'
import './App.css'

import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'

import dummyData from './dummy-data.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      posts: dummyData
    }
  }

  render() {
    const { posts } = this.state

    return (
      <div className="App">
        <SearchBar />
        {posts.map((post, i) => <PostContainer key={i} post={post} />)}
      </div>
    )
  }
}

export default App
