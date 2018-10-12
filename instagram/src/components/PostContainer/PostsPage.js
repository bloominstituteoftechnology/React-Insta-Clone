import React from "react";
import SearchBar from "../SearchBar/searchBar";
import PostContainer from "./postContainer";
import dummyData from './dummy-data';

class PostsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.setState({ data: dummyData });
  }

  filterPosts = str => {
    const filteredPosts = dummyData.filter(post => post.username.includes(str));
    this.setState({ data: filteredPosts });
  };

  render() {
    return (
      <>
        <div className="App" />
        <SearchBar filterPosts={this.filterPosts} />
        <PostContainer posts={this.state.data} />
        <div />
      </>
    );
  }
}

export default PostsPage;
