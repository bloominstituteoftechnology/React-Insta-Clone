import React, { Component } from 'react';
import PostPage from "./components/PostPage"
import Login from "./../src/login/Login"
import withAuthenticate from "./autentification/withAuthenticate"

class App extends Component {
  constructor(){
    super()
    this.setState = { }
  }
  render(){
    return (

      <div>
        <PostPage />
      </div>
    )
  }
}


export default withAuthenticate(App)(Login)