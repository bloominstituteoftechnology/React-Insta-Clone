import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js'

class PostContainer extends React.Component {
  render() {
    return (
      <div className="SearchBar">
        <h1>I'm a post container.</h1>
        <CommentSection />
      </div>
    )
  }
}

export default PostContainer;
