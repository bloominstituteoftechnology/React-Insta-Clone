import React, { Component } from 'react';
import './App.css';
import PostsPage from './Components/PostContainer/PostsPage'
import SearchBar from './Components/SearchBar/SearchBar'

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <PostsPage />
      </div>
    )
  }
}

export default Authenticate(App)