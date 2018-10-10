import React, { Component } from "react";
import Authenticate from '../src/Authentication/Authenticate';
import PostsPage from "../src/PostsPage";
import "./App.css";

class App extends Component {
 
  render() {
    return (
      <>
        <PostsPage />
      </>
    );
  }
}

export default Authenticate(App);
