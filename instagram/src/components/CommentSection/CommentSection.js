import React from 'react';
import Comment from './Comment.js';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments
    };
  }
  render() {
    return (
      <div className='comment-section'>
        {this.state.comments.map((comment, i) => {
          return <Comment key={i} comment={comment} />
        })}
      </div>
    );
  }
}

export default CommentSection;
