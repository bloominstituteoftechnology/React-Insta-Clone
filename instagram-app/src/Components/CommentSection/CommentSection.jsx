import "./Comment.css";
import React, { Component } from "react";
import PropTypes from 'prop-types';
import Comment from './Comment'
import CommentInput from'./CommentInput'

class CommentSection extends Component {
  constructor(props) {
    super();
    this.state = {
      comments: props.comments
    };
  }

  render() {
    return (
      <div>
       {this.state.comments.map((e, index) => <Comment key={index} comment={e} />)}
        <CommentInput />
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};


export default CommentSection;

