import React, { Component } from 'react';
import PostsPage from "./components/PostComponents/MainPostsPage";
//import Authenticate from "./Authentication/Authenticate";
import Login from "./components/Login/Login";

class App extends Component {
  constructor() {
    super();
    this.state = {
      
    }
  }

  login = e => {

  }

  render() {
    return (
      <div className="App">
        <Login 
        login = {this.login}
        />
        <PostsPage />
      </div>
    );
  }
}

export default App;
