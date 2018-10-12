import React, { Component } from "react";
import SearchBar from "../src/components/SearchBar/SearchBar";
import PostContainer from "../src/components/PostContainer/PostContainer";
import dummyData from "../src/dummy-data";
import likes from "../src/likes.js";

class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData,
      search: ""
    };
  }

  onUnload = () => {
    localStorage.removeItem("username");
  };

  searchFilter = event => {
    const match = this.state.dummyData.filter(
      post => (post.username.includes(this.state.search) ? post : null)
    );
    this.setState({
      search: event.target.value,
      dummyData: match
    });
  };

  clearSearch = event => {
    let result = this.state.search;
    if (event.key === "Backspace") {
      if (result.length === 1) {
        this.setState({
          dummyData: dummyData
        });
      } else {
        return null;
      }
    } else {
      return null;
    }
  };

  render() {
    return (
      <>
        <SearchBar
          dummyData={this.state.dummyData}
          search={this.state.search}
          searchFilter={this.searchFilter}
          clearSearch={this.clearSearch}
        />
        <PostContainer
          dummyData={this.state.dummyData}
          commentInput={this.commentInput}
          comment={this.state.comment}
          likes={likes}
        />
      </>
    );
  }
}

export default PostsPage;
