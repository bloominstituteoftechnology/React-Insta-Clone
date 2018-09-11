import React, { Component } from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import CommentInput from './CommentInput';

class CommentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments
        }
    }
    
    render() {
        return (
            <div>
                {this.state.comments.map((comment, i) => <Comment key={i} comments={comment} /> )} <CommentInput />
            </div>
        );
    }
}

Comment.propTypes = {
    comments: PropTypes.arrayOf(
      PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
    )
  };

export default CommentContainer;

