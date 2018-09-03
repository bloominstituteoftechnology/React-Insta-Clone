import React from 'react';

class CommentSection extends React.Component {
  state= {
    comments: this.props.post.comments,
    comment: ""
  };

  render() {
    return(
      <div className="comment-wrapper">
        <h3>Comment placeholder</h3>
      </div>
    );
  }
};

export default CommentSection;