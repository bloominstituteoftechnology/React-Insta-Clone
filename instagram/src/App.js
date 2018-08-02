import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import dummyData from "./dummy-data";
import Authenticate from "./authentication/Authenticate";
import PostsPage from "./components/PostContainer/PostsPage";

const AuthenticateContainer = Authenticate(PostsPage);

class App extends Component {
  constructor() {
    super();
    this.state = {
      insta_posts: dummyData
    };
  }
  render() {
    return (
      <div className="App">
        <AuthenticateContainer />
      </div>
    );
  }
}

export default App;
