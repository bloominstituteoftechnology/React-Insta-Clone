import React, { Component } from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from "./CommentInput";

    class CommentSection extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          comments: props.comments,
          comment: ""
        };
      }
      componentDidMount(){
        const id = this.props.postId;
        if(localStorage.getItem(id)){
          this.setState({
            comments: JSON.parse(localStorage.getItem(this.props.postId))
          });
        }else {
          this.setComments();
        }
      }
      componenetWillUnmount() {
  this.setComments();
}

setComments = () => {
  localStorage.setItem(
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
    alert("You must provide a comment");
    return;
  }
  const newComment = { text: this.state.comment, username: this.state.username };
  const comments = this.state.comments.slice();
  comments.push(newComment);
  this.setState({ comments, comment: "" });
  setTimeout(() => {
    this.setComments();
  }, 200);
};

      render() {
        return (
          <div className = 'col'>
          <div className = 'commentsection'>
            {this.state.comments.map((a, i) => <Comment key={i.timestamp} comment={a} />)}
            <CommentInput
              comment={this.state.comment}
              submitComment={this.handleCommentSubmit}
              changeComment={this.commentHandler}
            />
          </div>
        </div>
        );
      }
    }

    CommentSection.propTypes = {
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string,
           username: PropTypes.string,
           timestamp: PropTypes.string
         })
      )
    };


    export default CommentSection;
