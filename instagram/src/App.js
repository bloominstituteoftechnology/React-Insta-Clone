import React, { Component } from 'react';
import PostsPage from './Component/PostContainer/PostsPage'
import Authenticate from './Component/Authentication//WithAuthentication'



class App extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <PostsPage />
    )
  }
}



export default Authenticate(App);