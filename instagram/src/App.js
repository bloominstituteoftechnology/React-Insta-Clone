import React, { Component } from 'react'
import PostsPage from './components/PostContainer/PostsPage'
import Authenticate from './components/Authentication/Authenticate'

import './reset.css'
import './App.css'

class App extends Component {
  render() {
    return <PostsPage />
  }
}

export default Authenticate(App)
