import React, { Component } from 'react';
import './CommentSection.css';

import CommentActions from './CommentActions';
import CommentLikes from './CommentLikes';
import Comment from './Comment';
import CommentForm from './CommentForm';

import PropTypes from 'prop-types';

export default class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      likes: 0,
      comment: '',
    }
  }

  componentDidMount() {
    this.setState({
      comments: this.props.comments,
      likes: this.props.likes,
    });
  }

  handleSubmit = e => {
    const newComment = this.state.comment;
    this.setState({
      comments: [...this.state.comments, { username: 'Andres', text: newComment }],
      comment: '',
    });
    e.preventDefault();
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleClick = e => {
    this.setState({ likes: this.state.likes + 1 });
    e.preventDefault();
  }

  render() {
    return (
      <div className="post-comments">
        <CommentActions onClick={this.handleClick} />
        <CommentLikes likes={this.state.likes} />
        {this.state.comments.map((user, index) =>
          <Comment key={index} username={user.username} text={user.text} />
        )}
        <CommentForm comment={this.state.comment} onSubmit={this.handleSubmit} onChange={this.handleChange} />
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      text: PropTypes.isRequired,
    })
  ).isRequired,
  likes: PropTypes.number.isRequired,
}
