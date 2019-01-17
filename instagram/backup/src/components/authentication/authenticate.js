import React from 'react'
import Login from '../Login/Login.js'
import PostPage from '../PostContainer/PostsPage'


const Authenticate = App => {
  return class extends React.Component {
    constructor(){
      super()
      this.state = {
        login: false
      }
    }

    changeLogIn = e => {
    	const loggedIn = {login: true}
    	this.setState({ login: loggedIn })
    }
   
    render() {
      return(
      	this.state.login 
      			? <PostPage /> 
      			: <Login 
      				loggingInInsta = {this.changeLogIn} />
      )
    }
  }
}

export default Authenticate;