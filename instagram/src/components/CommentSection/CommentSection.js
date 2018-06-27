import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentForm from './CommentForm';

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: '',
      likes: 0
    };
  }
  componentDidMount() {
    let comments = this.state.comments;
    this.setState({ comments });
  }

  addNewComment = (e, i) => {
    e.preventDefault();
    let comments = this.state.comments.slice();
    const comment = this.state.comment;
    const obj = {
      username: 'test',
      text: comment
    };
    comments.push(obj);
    console.log(comment);
    this.setState({
      comments: comments,
      comment: ''
    });
  };

  handleCommentInput = (e) => {
    this.setState({ comment: e.target.value });
  };

  render() {
    return (
      <div>
        {this.state.comments.map((comment, i) => <Comment comment={comment} key={i} />)}
        <CommentForm
          addNewComment={this.addNewComment}
          handleCommentInput={this.handleCommentInput}
        />
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
