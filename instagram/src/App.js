import React, { Component } from 'react'
import './App.css'
import TheSearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'
import './index.css'
import dummyData from './components/dummy-data'
class App extends Component {
  render () {
    return (
      <div>
        <TheSearchBar />
        <PostContainer post={dummyData} />
      </div>
    )
  }
}

export default App
