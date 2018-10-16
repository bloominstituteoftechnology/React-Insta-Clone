import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Comment from './Comment';

class CommentSection extends Component {
  constructor() {
    super();
    this.state = {
      comments: [this.props.comments],
      user: "",
      text: ""
    }
  }

  addNewComment = (event, index) => {
    event.preventDefault();
    const comments = this.state.comments.slice();
    comments.push({username: 'VaderSteve', text: this.state.text});
    this.setState({comments: comments, text:''});
  };
  changeComment = event => {
    event.preventDefault();
    this.setState({text: event.target.value})
  }

  render() {
    return (
      <div>
        {this.state.comments.map((comment, index) => {
          return <Comment comment={comment} key={index} />;
        })}
        <Input
          add={this.addNewComment}
          change={this.changeComment}
          value={this.state.text}
        />
      </div>
    )
  }
}



CommentSection.propTypes = {
  comments: PropTypes.array.isRequired
}

export default CommentSection;