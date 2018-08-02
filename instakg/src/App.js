import React, { Component } from "react";
import "./App.css";
import PostsPage from "./components/PostContainer/PostsPage";
import Authentication from "./Authentication/Authentication";
import Login from "./components/Login/Login";
class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const Auth = Authentication(PostsPage, Login);
    return (
      <div className="App">
        {/* <Auth /> */}
        <Auth />
        {/* <PostsPage /> */}
      </div>
    );
  }
}

export default App;
