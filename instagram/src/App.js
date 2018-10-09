import React, { Component } from "react";
import Authenticate from "../src/Authentication/Authenticate";
import PostsPage from "./PostsPage";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }


  componentDidMount() {
    setTimeout(() => {this.setState({
      loggedIn: false,
    })}, 300);
  }

  
  render() {
    return (
      <>
        <PostsPage />
      </>
    );
  }
}

export default App;
