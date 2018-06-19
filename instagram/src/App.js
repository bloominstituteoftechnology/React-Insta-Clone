import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import PostsContainer from "./components/PostsContainer/PostsContainer";
import SearchBar from "./components/SearchBar/SearchBarContainer";

class App extends Component {
  constructor() {
    // will be called first.
    super();
    this.state = {
      posts: []
    };
  }
  // use componentDidMount to set dumyData on state
  componentDidMount() {
    // will be called third
    window.localStorage.setItem("Mounted", true);
    this.setState({ posts: dummyData }); // preferable for Async calls... AJAX
  }
  render() {
    // will be called second
    // will get called after setState
    return (
      <div className="App">
        <SearchBar />
        <PostsContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
