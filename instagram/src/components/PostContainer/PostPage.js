import React from "react";
import dummyData from "../../dummy-data";
import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "./PostContainer";

class PostPage extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filtered: []
    };
  }

  componentDidMount() {
    this.setState({
      posts: dummyData
    });
  }

  searchHandler = event => {
   const filtered = this.state.posts.filter( post => {
     return post.username.includes(event.target.value);
   });
   return this.setState({ filtered });
  };

  render() {
    return (
      <div>
        <SearchBar 
          search={this.searchHandler} 
          searchTerm={this.state.searchTerm}
        />
        <PostContainer
          posts={
            this.state.filtered.length > 0
              ? this.state.filtered
              : this.state.posts
          }
        />
      </div>
    );
  }
}

export default PostPage;
