import React, { Component } from "react";
import "./App.css";
// import PropTypes from "prop-types";
import dummyData from "./dummy-data";
import SearchBar from './SearchBar/SearchBar';
import PostContainer from './PostContainer/PostContainer';

console.log(dummyData);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: dummyData,
      comments: props.comments,
    };
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
