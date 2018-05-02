import React, { Component } from "react";
import dummyData from './dummy-data';
import CommentSection from './CommentSection';  



class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: props.posts     
    }; 
  }

  componentDidMount() {
      this.setState({posts: dummyData});
  }

  render() {
    return (
      <div>
        {props.posts.map(post => {
        return (
        <div key={post.username + post.text}>
        {post.username} {post.text}
        </div>
          );
        })}
      </div>
    );
  }
}

export default PostContainer; 