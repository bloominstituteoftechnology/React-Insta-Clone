import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js'

class PostContainer extends React.Component {
  nextId = 1;
  state ={
    posts: [],
  };

  getNextId = () => {
    return this.nextId++;
  }

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
