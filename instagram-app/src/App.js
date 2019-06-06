import React, { Component } from 'react';
import PostsPage from './components/PostContainer/PostsPage';
import Login from './components/Login/Login';
import './App.css';
import withAuthenticate from './components/Authentication/WIthAuthenticate';

class App extends Component {

  constructor () {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <newComponent />
      </div>
    );

  }
}

const newComponent = withAuthenticate(PostsPage)(Login);

export default App;
