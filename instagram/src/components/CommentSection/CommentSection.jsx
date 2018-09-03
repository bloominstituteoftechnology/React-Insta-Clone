import React from 'react';
import Comment from './Comment';

class CommentSection extends React.Component {
  state= {
    comments: this.props.post.comments,
    comment: ""
  };

  render() {
    return(
      <div className="comment-wrapper">
         {this.state.comments.map((comment, index) => <Comment key={index} comment={comment} />)}
      </div>
    );
  }
};

export default CommentSection;