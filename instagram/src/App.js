import React, { Component } from "react";
import Authenticate from '../src/Authentication/Authenticate';
import PostsPage from "../src/PostsPage";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  
  render() {
    return (
      <>
        <PostsPage loggedIn={this.props.loggedIn} />
      </>
    );
  }
}

export default App;
