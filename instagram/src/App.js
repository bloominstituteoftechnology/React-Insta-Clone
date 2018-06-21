import React, { Component } from 'react'
import './App.css'
import './index.css'
import PostsPage from './components/PostContainer/PostsPage'
import Authentication from './components/Authentication/Authentication'
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

export default Authentication(App)
