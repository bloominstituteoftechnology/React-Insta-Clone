import React, { Component } from "react";
import "./App.css";
import PostPage from "../src/components/PostContainer/PostPage";
import dummyData from "./dummy-data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      inputText: ""
    };
  }
  handleChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      console.log("you typing")
    );
  };

  addComment = (e, username) => {
    e.preventDefault();

    let data = this.state.data.map(post => {
      if (post.username === username) {
        post.comments.push({ username: username, text: this.state.inputText });
      }
      return post;
    });
    this.setState({ data: data, inputText: "" });
  };

  addLike = (e, username) => {
    let count = this.state.data.map(post => {
      if (post.username === username) {
        post.likes.push({ likes: this.state.count + 1 });
      }
      return count;
    });
    this.setState({ count: count });
  };

  componentDidMount() {
    this.setState(
      {
        data: dummyData
      },
      () => console.log(this.state.data)
    );
  }

  render() {
    return (
      <PostPage
        data={this.state.data}
        inputText={this.state.inputText}
        addComment={this.addComment}
        handleChange={this.handleChange}
      />
    );
  }
}
export default App;
