import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';
import Login from './components/Login/Login'


const AuthApp = Authenticate(PostsPage)(Login);

class App extends Component {
  constructor() {
    super();
    this.state = {
      
    }
  }

    //setup the username/password on localStorage
  componentDidMount() {
    localStorage.setItem('username', 'Brandon');
    localStorage.setItem('password', 'qwerty');
}
  
  render() {

    return (
      <div className="App">
        <AuthApp />
      </div>
    );
  }
}


export default App;
