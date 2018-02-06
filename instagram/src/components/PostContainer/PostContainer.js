import React, { Component } from "react";
import CommentSection from '../CommentSection/CommentSection';
import dummyData from '../../dummy-data';

class PostContainer extends Component {
  state = {
    dummyData
  };

  render() {
    return ( <div>
    {this.state.dummyData.map(user => {
    return (
    <div>
      <img />
        <CommentSection key={user.username} />
      </div>
      )
    })
  }
  </div>
  );
}
export default PostContainer;