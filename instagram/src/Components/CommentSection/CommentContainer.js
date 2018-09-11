import React, { Component } from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

class CommentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: props.dummyData
        }
    }
    
    render() {
        return (
            <div>
                {this.state.comment.map(comment => <Comment comment = {comment} /> )} 
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

