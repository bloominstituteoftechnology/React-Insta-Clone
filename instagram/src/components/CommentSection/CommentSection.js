import React, { Component } from 'react';
import Comment from '../CommentSection/Comment';
import PostInteraction from '../PostInteraction/PostInteraction';
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../CommentSection/commentsection.css';

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments
    };
  }

  render() {
    return (
      <div className="commentSection">
        <PostInteraction likes={this.props.likes} />
        {this.state.comments.map((comment, index) => {
          return <Comment key={index} comment={comment} />;
        })}
        <form>
          <input
            type="text"
            className="commentAdd"
            placeholder="Add a Comment..."
          />
          <FontAwesomeIcon icon="ellipsis-h" className="tripleDot" />
        </form>
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: propTypes.array.isRequired
};

export default CommentSection;
