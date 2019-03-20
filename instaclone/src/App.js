import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import Login from './components/Login/Login';
import withAuthenticate from './authentication/withAuthenticate';

class App extends Component {

  render(){
    return(
      <div>
        <ComponentFromWithAuthenticate />
      </div>
    )
  }
}
const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);

export default App;