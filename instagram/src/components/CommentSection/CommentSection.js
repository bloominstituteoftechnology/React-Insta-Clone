import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment/Comment.js';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      time: props.time
    };
  }

  render() {
    return (
      <div className="comment-section">
        {this.state.comments.map( (comment, i) => {
          return <Comment
            key={i}
            comments={comment} />
        })}
        <p className="timestamp">{this.state.time}</p>
        <input className="add-comment" placeholder="Add a comment..."></input>
      </div>
    )
  };
}

CommentSection.propTypes = {
  comments: PropTypes.array
}

export default CommentSection;
