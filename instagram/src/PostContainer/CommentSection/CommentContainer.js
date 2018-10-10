import React, { Component } from "react";
import Comment from "./Comment";
import NewComment from './NewComment';
class CommentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.item,
      comment: ""
    };
  }
  changeComment = event => {
    this.setState({ comment: event.target.value });
  };
  addComment = event => {
    event.preventDefault();
    const newComment = { text: this.state.comment, username: "qnguyen" };
    const comments = this.state.comments.slice();
    comments.push(newComment);
    this.setState({ comments, comment: "" });
  };

  render() {
    return (
      <div className="comment-container">
        <Comment
          comments={this.state.comments}
          
        />
        <NewComment 
            addComment={this.addComment}
            changeComment={this.changeComment}
        />
      </div>
    );
  }
}

export default CommentContainer;
