import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

class CommentSection extends Component {
  constructor() {
    super();
    this.state = {
      comments: props.comments,
      comment: '',
      likes: 0
    };
  }
  componentDidMount() {
    this.setState({ comments: [...props.comments] });
  }

  addNewComment = (e, i) => {
    event.preventDefault();
    let comments = this.state.comments;
    comments.push(this.state.comment);
    this.setState({
      comment: '',
      comments: comments
    });
  };

  handleCommentInput = (e) => {
    this.setState({ comment: event.target.value });
  };

  render() {
    return (
      <div>
        <Comment comment={this.state.comment} />
        <form onSubmit={this.addNewComment}>
          <input
            type="text"
            placeholder="Add a comment..."
            onChange={this.handleCommentInput}
            value={this.state.comment}
          />
        </form>
      </div>
    );
  }
}

export default CommentSection;

// CommentSection.propTypes = {
//   post: PropTypes.shape({
//     comments: PropTypes.string
//   })
// };
