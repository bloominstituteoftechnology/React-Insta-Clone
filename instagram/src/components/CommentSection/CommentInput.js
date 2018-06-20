import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentInput extends Component {
    constructor(props) {
      super(props);
      this.handleCommentInput = this.addNewComment2(props.addNewComment);
      this.state = {
        updateComment: props.updateComment,
      }
    }

    addNewComment2(inputFunction) {
      let id = this.props.commentKey;
      return function(event) {
        inputFunction(event, id);
      }
    }
    render() {
      return (
        <form onSubmit={this.handleCommentInput} >
          <input type="text" 
                  placeholder="Add comment... "
                  onChange={this.state.updateComment} />
        </form>
      );
    };
  }


CommentInput.propTypes = {
  commentKey: PropTypes.number,
}

export default CommentInput;

