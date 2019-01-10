import React, { Component } from 'react';
import PostsPage from './Components/PostContainer/PostsPage';
import Authenticate from './Components/Authentication/Authenticate';
import './App.css';

class App extends Component {
  

  //create a componentDidMount(){}
  //create a login function

  render() {
    return (
      <div className="App">
        <h1>Welcome to my Instagram Clone App</h1>
        <PostsPage />
      </div>
    );
  }
}

export default Authenticate(App);