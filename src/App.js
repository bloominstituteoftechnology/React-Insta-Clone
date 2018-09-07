import React, { Component } from "react";
import "./App.css";
import PostsPage from "./components/PostsContainer/PostsPage";
import Authenticate from "./components/Authentication/Authenticate";

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: ""
    };
  }
  componentDidMount() {
    const user = localStorage.getItem("user");
    this.setState({ username: user });
  }

  render() {
    return <PostsPage />;
  }
}

export default Authenticate(App);
