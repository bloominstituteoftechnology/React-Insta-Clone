import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          comments: props.comments,
          comment: "",
          likes: 0
      };
    }
componentDidMount() {
  const id = this.props.postId;
  if (localStorage.getItem(id)) {
      this.setState({
        comments: JSON.parse(localStorage.getItem(this.props.postId))
      });
  } else {
    this.setComments();
  }
}

componentWillUnmount() {
    this.setComments();
}

postComments = () => {
    localStorage.postItem(
        this.props.postId,
        JSON.stringify(this.state.comments)
    );
};

commentHandler = e => {
    this.setState({ comment: e.target.value });
};

handleCommentSubmit = e => {
    e.preventDefault();
    if (this.state.comment === "") {
        alert("Say something about this!");
        return;
    }
    const newComment = { text: this.state.comment, username: "" };
    const comments = this.state.comments.slice();
    comments.push(newComment);
    this.setState({ comments, comment: "" });
    setTimeout(() => {
        this.postComments();
    }, 500);
};

render() {
    return (
        <div>
            {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
            <CommentInput
            comment={this.state.comment}
            submitComment={this.handleCommentSubmit}
            changeComment={this.commentHandler}
            />
        </div>
    );
  }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
     PropTypes.shape({ text: PropTypes.string, username: PropTypes.string})   
    )
};


export default CommentSection;