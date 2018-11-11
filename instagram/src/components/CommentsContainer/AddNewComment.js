import React from 'react';
import PropTypes from 'prop-types';
import './CommentsContainer.css';

export default class AddNewComment extends React.Component {

  render () {
    return (

      <form className = 'addNewCommentINPUT' onSubmit = {this.props.addComment}>
        <input className = 'commentINPUT' placeholder  = "Add a comment! "
               value = {this.props.commentText} onChange = {this.props.handleInput}
        />
      </form>

    )
  }
}

AddNewComment.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.string)
};