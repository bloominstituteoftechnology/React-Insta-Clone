import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

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
        <div>{ this.state.comments.map(comment => <Comment comment={comment} key={comment.text} />) }</div>
        <input type="text" placeholder="Add a comment..."  className="commentAdd"/>
      </div>
    );  
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
}

export default CommentSection;