import React, { Component } from 'react';
import PostsPage from "./components/PostComponents/MainPostsPage";
import Authenticate from "./Authentication/Authenticate";

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: ""
    }
  }
  
  componentDidMount() {
    // login.js -> state: username/password, localStorage.setItem() 
    const user = localStorage.getItem("user");
    this.setState({ username: user });
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
