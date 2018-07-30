import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import dummyData from "./dummy-data.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData 
    };
  }

  render() {
    return (
      <div>
      {this.state.posts.map(post => <div>{post.username}</div>)}
      </div>
    );
  }
}

export default App;
