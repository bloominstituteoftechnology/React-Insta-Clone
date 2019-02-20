
import React from 'react';

const CommentInput = props => {
  return (
    <form onSubmit={props.submitComment}>
      <input
        type="text"
        value={props.comment}
        placeholder="Add comment... "
        onChange={props.changeComment}
      />
    </form>
  );
};

export default CommentInput;


/*   submitChanges = e => {
    this.setState({ [e.target.username]: e.target.value});
  };

 submitComment = e => {
  this.setState({ comment: ""});
  this.props.addComment(e, this.state.comment);

 <button onClick={}> Submit Comment </button> */