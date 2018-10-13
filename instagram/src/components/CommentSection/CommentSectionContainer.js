import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import './Comments.css'

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments
    };
  }

  render() {
    return (
      <div className="Comment-container">
        {this.state.comments.map((comment, i) =>
          <div key={i}>
            <Comment comment={comment} />
          </div>
        )}
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
};

export default CommentSection;