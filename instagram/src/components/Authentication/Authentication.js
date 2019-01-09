import React from 'react'
import Login from '../Login/Login.js'
import PostPage from '../PostContainer/PostPage'


const Authenticate = App => {
  return class extends React.Component {
    constructor(){
      super()
      this.state= {
        login: false
      }
    }

    LoggedIn = (e) => {
    	const loggedUser = this.state.login = true;
    	this.setState( { login: loggedUser } )
    }


    render() {
      return(
      	this.state.login ? <PostPage /> : <Login />
      )
    }
  }
}

export default Authenticate;