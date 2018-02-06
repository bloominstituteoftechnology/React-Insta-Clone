import React from 'react';

class CommentSection extends React.Component {
  nextId = 1;
  state = {
    comments: [],
  };

  getNextId = () => {
    return this.nextId++;
  }

  render() {
    return (
      <div className="SearchBar">
        <h1>I'm a comments section.</h1>
      </div>
    )
  }
}

export default CommentSection;
