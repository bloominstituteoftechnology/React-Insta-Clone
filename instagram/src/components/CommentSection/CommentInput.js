import React from 'react';
// import PropTypes from 'prop-types';
import './CommentSection.css';


class CommentInput extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      comment: props.comment,
    }
  }

  
  render () {
    {console.log(this.state.comment)}
    return (
      <div className="commentInputForm">
        <form onSubmit={this.handleSubmit}>
          <input className="commentInput" placeholder="Add a comment..." />
        </form>
      </div>
    )
  }
}


export default CommentInput;