import React from 'react';
// import PropTypes from 'prop-types';
import './CommentSection.css';


class CommentInput extends React.Component {
  constructor (props) {
    super(props);
    console.log("commentInputProps", props)
    this.state = {
      comments: props.comments,
      handleSubmit: props.handleSubmit,
    }
  }

  // handleSubmit = event => {
  //     event.preventDefault();
  //     let arrayOfComments = this.state.comments.slice();
  //     arrayOfComments.push({
  //       username: "Frank",
  //       text: "test"
  //     })
  //     this.setState({
  //       comments: arrayOfComments,
  //     })
  //   }

  render () {
    return (
      <div className="commentInputForm">
        <form onSubmit={this.state.handleSubmit}>
          <input className="commentInput" placeholder="Add a comment..." />
        </form>
      </div>
    )
  }
}


export default CommentInput;