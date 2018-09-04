import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import dummyData from "./dummy-data";
import PostsContainer from "./components/PostContainer/PostContainer.js";
import SearchBar from "./components/SearchBar/SearchBar.js";

class App extends Component {
  constructor() {
    super();
    this.state = { posts: [] };
    console.log("constructor ran");
    console.log(this.state);
  }

  componentDidMount() {
    console.log("component did mount");
    this.setState({ posts: dummyData }, console.log(this.state));
    console.log("added data to App state");
  }

  searchPosts(event, value) {
    console.log("search happened");
    event.preventDefault();
    console.log(this.state);
    let posts = this.state.posts.filter(post => post.username === value);
    console.log(posts);
    this.setState({ posts: posts }, console.log(this.state));
  }
  render() {
    return (
      <div className="App">
        <SearchBar searchPosts={this.searchPosts.bind(this)} />
        <PostsContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
