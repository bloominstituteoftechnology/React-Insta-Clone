import React, { Component } from "react";
import "../../App.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import PostContainer from "./PostContainer";

class PostsPage extends Component {

  render() {
    return (
      <div className="wholePage">
        <SearchBar />
        <PostContainer data={this.props.data} />
      </div>
    );
  }
}

export default PostsPage;
