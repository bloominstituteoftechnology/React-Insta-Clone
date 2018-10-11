import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import Login from './components/Login/Login'
import Authenticate from './authentication/Authenticate';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      username: window.localStorage.getItem('username'),
    }
  }

  componentDidMount() {
    let username = window.localStorage.getItem('username');
    console.log(username);
    if (username === '' || username === null || username === "undefined") {
      this.setState({
        isLoggedIn: false,
      })
    }
    else {
      this.setState({
        isLoggedIn: true,
      })
    }
  }

  login = event => {
    let username = event.target.parentNode.firstChild.value;
    if (username !== '') {
      window.localStorage.setItem('username', `${username}`);
    }
  }

  render() {
    return (
      <div className="App">
        <ShowConditionally isLoggedIn={this.state.isLoggedIn} login={this.login} username={this.state.username}/>
      </div>
    );
  }
}

const ShowConditionally = Authenticate(PostsPage)(Login);

export default App;
