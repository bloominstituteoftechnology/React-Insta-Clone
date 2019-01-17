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

  // addLike = (e, username) => {
  //   let count = this.props.data.map(post => {
  //     if (post.username === username) {
  //       post.likes.push({ likes: this.props.count + 1 });
  //     }
  //     return count;
  //   });
  //   this.setState({ count: count });
  // };

  render() {
    return (
      <PostPage
        data={this.props.data}
        inputText={this.props.inputText}
        addComment={this.props.addComment}
        handleChange={this.props.handleChange}
        inputSearch={this.props.inputSearch}
        searchData={this.props.searchData}
        addLike={this.props.addLike}
        handleClick={this.props.handleClick}
      />
    );
  }
}
export default authenticate(App)(Login);
