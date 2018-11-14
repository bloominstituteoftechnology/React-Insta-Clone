import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './Authentication/Authenticate';
import Login from './components/Login/Login';



class App extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  handleLogin = (e) => {
    e.preventDefault();
  }
  render() {
    
    return (
      <div className="App">
        {/* <Authenticate /> */}
        <Login 
          handleChange={this.handleChange}
          handleLogin={this.handleLogin}
        />
        <PostsPage />
      </div>
    );
  }
}

export default Authenticate(App);
