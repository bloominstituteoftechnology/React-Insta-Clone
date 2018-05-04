import React, { Component } from 'react'
import './App.css'
import dummyData from './dummy-data'
import TheSearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'

class App extends Component {
  render() {
    return (
      <div>
        <TheSearchBar />
        <PostContainer />
      </div>
    )
  }
}

export default App
