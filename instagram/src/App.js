import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage'
import Authenticate from './Authentication/Authenticate'
import Login from './components/LoginPage/Login'

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }
  
  inputHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  login = (e) => {
    const user = this.state.username;
    localStorage.setItem('user', user);
    window.location.reload();
  }

  
  componentDidMount() {
    
  }
  render() {
    return (
      <div className="App">
        <h1>clown</h1>
        <Login login={this.login} inputHandler={this.inputHandler}/>
        <PostsPage />
      </div>
    );
  }
}

export default Authenticate(App);
