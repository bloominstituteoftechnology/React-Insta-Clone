import React, { Component } from 'react';
import './App.css';
import PostsPage from '../src/components/PostsPage.js';
import LogIn from './components/LogIn/Login.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      isLoggedIn: false,
      usernameText: '',
      username: '',
      pw: ''
    }
    // console.log("username is", this.state.username);
    
  }

  componentDidMount(){
    // localStorage.getItem()
  }


  render(){
   
      return <PostsPage />
    
  }

  
}

export default App;
