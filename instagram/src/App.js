import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage'
import Authenticate from './Authentication/Authenticate'
import Login from './components/LoginPage/Login'

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      
    };
  }

  login = (e) => {
    alert('login')
  }

  
  componentDidMount() {
    
  }
  render() {
    return (
      <div className="App">
        <h1>clown</h1>
        <Login login={this.login}/>
        <PostsPage />
      </div>
    );
  }
}

export default Authenticate(App);
