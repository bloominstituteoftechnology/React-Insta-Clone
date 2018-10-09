import React, { Component } from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'

import './reset.css'
import './App.css'

import dummyData from './dummy-data.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    this.setState({ posts: dummyData })
  }

  render() {
    const { posts } = this.state

    return (
      <div className="App">
        <SearchBar />
        <div className="posts-container">
          {posts.length > 0 &&
            posts.map((post, i) => <PostContainer key={i} post={post} />)}
        </div>
      </div>
    )
  }
}

export default App
