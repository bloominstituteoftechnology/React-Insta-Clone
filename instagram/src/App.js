import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import Login from './components/Authentication/Login'
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate'


class App extends Component {
  constructor(){
    super();
    this.state = {
      posts: [],

      username:'', 
      
      password:''

     };
  }

handleUsername = e => {
 this.setState({username: e.target.value});
}

handlePassword = e => {
  this.setState({password: e.target.value});
}

addNewLogin = e => {
  e.preventDefault();
  localStorage.setItem('username', this.state.username); 
  localStorage.setItem('password', this.state.password);
}

componentDidMount() {
  console.log('mounty component', this.state)
  this.setState({posts: dummyData});
  return localStorage.getItem('username') === 'mboegner' &&
         localStorage.getItem('password') === 'password'      
         ? <PostsPage posts={this.state.posts}/> : <Login />

}

  render() {
    console.log('page rendered', this.state)
    return (
      <div className="container">
       <Login 
       addNewLogin={this.addNewLogin}
       handleUsername={this.handleUsername}
       handlePassword={this.handlePassword}
       />
      </div>
    );
  }
}

const Auth = Authenticate(App)

export default Auth;
