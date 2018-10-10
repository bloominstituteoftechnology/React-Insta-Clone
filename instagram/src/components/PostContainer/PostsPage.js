import React, { Component } from "react";
import "../../App.css";
import dummyData from "./dummy-data";
import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "./PostContainer";

class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchResults: []
    };
  }

  componentDidMount() {
    this.setState({ data: dummyData });
  }

  handleSearch = event => {
    this.setState({
      searchResults: this.state.data.filter(post =>
        post.username.includes(event.target.value)
      )
    });
  };

  render() {
    return (
      <div className="container posts">
        <SearchBar handleSearch={this.handleSearch} />
        <div className="main-content">
          <PostContainer
            data={
              !this.state.searchResults.length
                ? this.state.data
                : this.state.searchResults
            }
          />
        </div>
      </div>
    );
  }
}

export default PostsPage;