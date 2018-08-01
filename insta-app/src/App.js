import React, { Component } from "react";
import "./App.css";
import "./components/Components.css";
import PostsPage from "./components/PostContainer/PostsPage"; 
import Authenticate from "./components/Authentication /Authentication";

class App extends Component {
  constructor(App) {
    super(App);
    this.state = {

    };
  }
 
  render() {
    return (
        <div>
          <PostsPage />
        </div>
    );
  }
}

export default Authenticate(App);
