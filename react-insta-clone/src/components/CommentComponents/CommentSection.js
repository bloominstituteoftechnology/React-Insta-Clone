import React from "react";
import Comment from "./Comment";
import CommentInput from "./CommentInput";
import './CommentSection.css';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: ""
    };
  }

  inputChangeHandler = e => {
    this.setState({ comment: e.target.value });
  };

  addNewComment = e => {
    e.preventDefault();
    const comments = this.state.comments.slice();
    comments.push({ text: this.state.comment, username: "anon" });
    this.setState({ comments, comment: "" });
  }

  render() {
    return (
      <div>
        {this.state.comments.map((c, i) => <Comment key={i} newComment={c} />)}
        <CommentInput 
          add={this.addNewComment}
          comment={this.state.comment}
          change={this.inputChangeHandler}
        />
      </div>
    );
  }
}

export default CommentSection;



