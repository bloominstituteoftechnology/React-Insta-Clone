import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import PostsContainer from "./components/PostsContainer/PostsContainer";
import SearchBar from "./components/SearchBar/SearchBarContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  addNewComment = event => {
    event.preventDefault();
    if (this.state.inputText) {
      this.setState({
        comments: [
          ...this.state.comments,
          { username: this.state.userName, text: this.state.inputText }
        ],
        inputText: ""
      });
    }
  };

  componentDidMount() {
    this.setState({
      posts: dummyData
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostsContainer
          posts={this.state.posts}
          addNewComment={this.addNewComment}
        />
      </div>
    );
  }
}

export default App;
