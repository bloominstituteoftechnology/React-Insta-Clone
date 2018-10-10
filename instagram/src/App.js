import React, { Component } from 'react'
import PostsPage from './components/PostContainer/PostsPage'
import Authenticate from './components/Authentication/Authenticate'
import Login from './components/Login/Login'

import './reset.css'
import './App.css'

class App extends Component {
  login = username => {
    localStorage.setItem('username', username)
    console.log(username)
    this.forceUpdate()
  }

  render() {
    const { login } = this

    return (
      <div>
        <Login login={login} />
        <PostsPage />
      </div>
    )
  }
}

export default Authenticate(App)
