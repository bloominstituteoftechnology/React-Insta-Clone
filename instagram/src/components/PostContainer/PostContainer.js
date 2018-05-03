import React, { Component } from "react";
import dummyData from './dummy-data';
import Post from './Posts.js';


class PostContainer extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }; 
  }

  componentDidMount() {
      this.setState({posts: dummyData});
  }

  render() {
    const { posts } = this.state;
    return
      <div>
        {posts.map(post => <Post post={post}/>)};
      </div>
  }
}
 
export default PostContainer; 