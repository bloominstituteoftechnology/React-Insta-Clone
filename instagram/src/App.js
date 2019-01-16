/* eslint-disable default-case */
import React, { Component } from "react";
import "./App.css";
// eslint-disable-next-line no-unused-vars
import PostPage from "../src/components/PostContainer/PostPage";

import { authenticate } from "./components/authentication/authenticate";
import Login from "../src/components/Login/Login";
class App extends Component {
  constructor(props) {
    super(props);
  }

  addComment = (e, username) => {
    e.preventDefault();

    let data = this.props.data.map(post => {
      if (post.username === username) {
        post.comments.push({ username: username, text: this.props.inputText });
      }
      return post;
    });
    this.setState({ data: data, inputText: "" });
  };

  addLike = (e, username) => {
    let count = this.props.data.map(post => {
      if (post.username === username) {
        post.likes.push({ likes: this.props.count + 1 });
      }
      return count;
    });
    this.setState({ count: count });
  };

  render() {
    return (
      <PostPage
        data={this.props.data}
        inputText={this.props.inputText}
        addComment={this.addComment}
        handleChange={this.handleChange}
      />
    );
  }
}
export default authenticate(App)(Login);
