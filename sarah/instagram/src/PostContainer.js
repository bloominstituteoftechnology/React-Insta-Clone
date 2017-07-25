// Post container
// should render two image tags
// needs to handle state (or is it just props??) ---> should be container component --> should be a class
import React, { Component } from 'react';
import CommentSection from './CommentSection';

class PostContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* <CommentSection comments={this.props.postData.comments} /> */}
        Text from the Post Container component...and:
        <CommentSection />
      </div>
    );
  }
}

export default PostContainer;
