/* eslint-disable no-useless-constructor */
/* eslint-disable default-case */
// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import PostPage from "../src/components/PostContainer/PostPage";
import { authenticate } from "./components/authentication/authenticate";
import Login from "../src/components/Login/Login";
import "./globalstyles";

class App extends Component {
  constructor(props) {
    super(props);
  }

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
