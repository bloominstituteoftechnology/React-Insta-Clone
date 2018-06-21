import React, { Component } from 'react'
import './App.css'
import './index.css'
import PostsPage from './components/PostContainer/PostsPage'
class App extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    return (
      <div className='page'>
        <PostsPage />
      </div>
    )
  }
}

export default App
