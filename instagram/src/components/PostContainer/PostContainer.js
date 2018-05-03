import React, { Component } from "react";
import Post from './Posts';
import dummyData from '../../dummy-data';


class PostContainer extends Component {
  state = {
      posts: []
  }; 
  

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