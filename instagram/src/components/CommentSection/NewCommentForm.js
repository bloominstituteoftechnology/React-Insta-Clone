import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './Style.css';

const NewCommentForm = props => {
  const cmtUsr = 'James'

  return (
  <div className="AddNewComment">
    <form className="post-form" onSubmit={event => props.addNewComment(event, props.postUsr, cmtUsr, moment().format('MMMM Do YYYY, h:mm:ss a'))}>
      <textarea 
        className="post-add-comment-textbox" 
        rows="4" 
        name="newComment" 
        placeholder="Add a comment..." 
        form="usrform"
        value={props.newComment}
        onChange={props.handleChange}
      />
      <input 
        className="post-add-comment-btn"
        type="submit"
      />
    </form>
  </div>
  );
}

NewCommentForm.propTypes = {
  addNewComment: PropTypes.func
}

export default NewCommentForm;