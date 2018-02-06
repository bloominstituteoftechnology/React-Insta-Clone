import React, { Component } from "react";
import CommentSection from '../CommentSection/CommentSection';
import dummyData from '../../dummy-data';

class PostContainer extends Component {
  state = {
    dummyData
  };

  render() {
    return ( 
    <div>
      {this.state.dummyData.map(post => {
        return (
        <div>
          {post.comments.map(comment => {
            return <CommentSection key={comment.username} user={comment.username} />
          })}
        </div>
      )
    })
  }
  </div>
  )
}
}
export default PostContainer;