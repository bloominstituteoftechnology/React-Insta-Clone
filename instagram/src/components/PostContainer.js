import React, { Component } from 'react';
import CommentSection from './components/CommentSection';

class PostContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CommentSection comments={this.props.postData.comments} />
      </div>
    );
  }
}

export default PostContainer;
