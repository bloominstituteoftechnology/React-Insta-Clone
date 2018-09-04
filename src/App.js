import React, { Component } from "react";
import logo from "./logo.svg";
import HeaderContainer from "./components/SearchBar/HeaderContainer";
import PostContainer from "./components/PostContainer/PostContainer";
import dummyData from "./dummy-data";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <PostContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
