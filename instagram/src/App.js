import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage'
import Authenticate from './Authentication/Authenticate'
import Login from './components/LoginPage/Login'

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      username: ''
    };
  }
  
 

  
  componentDidMount() {
    
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
