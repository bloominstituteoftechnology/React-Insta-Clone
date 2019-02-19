import React, { Component } from "react";
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import "./css/main.css";

class App extends Component {
  constructor() {
    super();
    this.state = { data: [], newCommentText: "" };
  }

  componentDidMount() {
    this.setState({ data: dummyData });
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addNewComment = (e, timestamp) => {
    e.preventDefault();
    const newComment = {
      // We haven't really worked out the username of the commenter, so I hardcoded this one for now:
      username: "catslanderer",
      text: this.state.newCommentText
    };
    // Finds index of the post that was commented on:
    const postIndex = this.state.data.findIndex(
      post => post.timestamp === timestamp
    );
    // Sets up tempData to update nested state:
    const tempData = { ...this.state.data };
    // Pushes new comment to comment array:
    tempData[postIndex].comments.push(newComment);
    // Updates state to include new comment and clears the comment form:
    this.setState({
      tempData,
      newCommentText: ""
    });
  };

  render() {
    return (
      <div className="container">
        <header className="header">
          <SearchBar changeHandler={this.changeHandler} />
        </header>
        <PostContainer
          posts={this.state.data}
          newCommentText={this.state.newCommentText}
          changeHandler={this.changeHandler}
          addNewComment={this.addNewComment}
        />
      </div>
    );
  }
}

export default App;
