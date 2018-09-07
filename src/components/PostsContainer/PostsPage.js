import React, { Component } from "react";
import dummyData from "../../dummy-data";
import PostsContainer from "../PostsContainer/PostsContainer";
import SearchBar from "../SearchBar/SearchBarContainer";
import styled, { css } from "styled-components";

const App = styled.div`
  text-align: center;
`;

class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      search: ""
    };
  }

  componentDidMount() {
    this.setState({
      posts: dummyData
    });
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <App>
        <div className="App">
          <SearchBar handleInput={this.handleInput} />
          <PostsContainer
            posts={this.state.posts}
            searchTerm={this.state.search}
          />
        </div>
      </App>
    );
  }
}

export default PostsPage;
