import React, { Component } from "react";
import SearchBar from "../src/components/SearchBar/SearchBar";
import PostContainer from "../src/components/PostContainer/PostContainer";
import dummyData from "./dummy-data";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData,
      comment: ''
    }
  }

  commentInput = event => {
    this.setState({
      comment: event.target.value
    })
  }

  addComment = event => {
    event.preventDefault();
    this.setState({
      comments: [
        ...this.state.comments,
        {
          username: "defaultUser",
          text: this.state.comment
        }
      ],
      comment: ""
    })
  }
  render() {
    return (
      <>
        <SearchBar />
        <PostContainer dummyData={this.state.dummyData} commentInput={event => this.commentInput(event)} addComment={event => this.addComment(event)} comment={this.state.comment} />
      </>
    );
  }
}

export default App;
