import React, { Component } from 'react';

import Authenticate from './components/Authentication/Authenticate'
import PostsPage from './components/PostContainer/PostsPage'
import Login from './components/Login/Login'
class App extends Component {
  constructor(props){
    super(props);

    this.state ={
      username: '',
      password: '',
    }

  }
  login = (username, password) => {
		localStorage.setItem('username', username)
		localStorage.setItem('password', password)
  }
  

  render() {
    return (
      <div>
        {
			  	this.props.authenticated ?  <PostsPage logout={this.props.logout} user={this.props.user} /> : <Login login={this.login} />
			  }
       
      </div>
    ) 
  }
}

export default Authenticate(App);
