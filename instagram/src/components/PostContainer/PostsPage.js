import React, {Component} from 'react';

import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "./PostContainer";
import dummyData from "./../../dummy-data";

class PostsPage extends Component {

  constructor() {
    super();
    this.state = {
      postData: dummyData
    };
  }

  render() {
    return (
      <div className="app">
      <SearchBar />
      {this.state.postData.map(post => (
          <PostContainer post={post} key={Math.random()} />
        ))}
      </div>

    );
  }
}

export default PostsPage;