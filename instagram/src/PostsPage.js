import React, { Component } from "react";
import SearchBar from "../src/components/SearchBar/SearchBar";
import PostContainer from "../src/components/PostContainer/PostContainer";
import dummyData from "../src/dummy-data";
import likes from "../src/likes.js";
// import "./PostsPage.css";

class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
      search: ""
    };
  }

  onUnload = () => {
    localStorage.removeItem("username")
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        dummyData: dummyData,
        search: ""
      });
    }, 300);
  }

  searchFilter = event => {
    const match = this.state.dummyData.filter(
      post => (post.username.includes(this.state.search) ? post : null)
    );
    this.setState({
      search: event.target.value,
      dummyData: match
    });
  };

  render() {
    return (
      <>
        <SearchBar
          dummyData={this.state.dummyData}
          search={this.state.search}
          searchFilter={this.searchFilter}
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
