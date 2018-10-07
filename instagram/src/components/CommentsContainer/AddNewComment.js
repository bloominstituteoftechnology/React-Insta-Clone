import React from 'react';
import PropTypes from 'prop-types';
import './CommentsContainer.css';

export default class AddNewComment extends React.Component {

  render () {
    return (

      <div className = 'addNewCommentINPUT'>
        <input className = 'commentINPUT' placeholder  = "Add a comment! "/>
      </div>
    )
  }
}

AddNewComment.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.string)
};