import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage'
import Authenticate from './components/Authentication/Authenticate'
import LoginPage from './components/Login/LoginPage'

const Loggedin = Authenticate(PostsPage);
const FailedLogin = Authenticate(LoginPage);
class App extends Component {
  constructor(){
    super();
  }


  render() {
    return (
      <div className="App">
        <PostsPage />
        </div>
      );
  }
}

export default Authenticate(App);
