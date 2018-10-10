import React, { Component } from 'react';
import PostPage from './components/PostContainer/PostPage'
import Authenticate from './components/Authentication/Authenticate'
import Login from './components/Login/Login'



class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}  
    
  }








  render() {
    
    return <div className="App">{this.props.loggedIn ? <PostPage /> : <Login />}</div>
     
    
  }
}

export default Authenticate(App)
