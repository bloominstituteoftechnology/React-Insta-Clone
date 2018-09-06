import React from 'react';
import PropTypes from "prop-types";
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments
      comment: ''
    };
  }

  commentHandler = e => {
    this.setState({ comment: e.target.value });
  }

  addNewComment = e => {
    e.preventDefault();
    const newComment = { text: this.state.comment, username: 'user' };
    const comments = [...this.state.comments]
    comments.push(newComment);
    this.setState({ comments, comment: '' });
  };
  
  render() {
    return (
      <div>
        {this.state.comments.map((c, i) => <Comment key = {i} comment = {c} />)}
        <CommentInput />
      </div>
    );
  }
} // CommentSection

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentSection;
