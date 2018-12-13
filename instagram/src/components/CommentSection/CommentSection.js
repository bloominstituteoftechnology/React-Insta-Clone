import React from 'react';
import Comment from './Comment';

import './CommentSection.css';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments
    }
  }

  render() {
    return (
      <div className="commentSection">
        <div>{ this.state.comments.map(comment => <Comment comment={comment} />) }</div>
        <input type="text" placeholder="Add a comment..."  className="commentAdd"/>
      </div>
    );  
  }
}

export default CommentSection;