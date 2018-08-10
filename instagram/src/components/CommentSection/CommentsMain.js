import React from "react";
import CommentSection from "./CommentSection";
import InputComment from "./InputComment";

class CommentMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: ""
    };
  }

  commentHandler = event => {
    this.setState({ comment: event.target.value });
  };

  commentSubmit = event => {
    addEventListener.preventDefault();
    
    const newComment = { text: this.state.comment, username: "Philzcoffee" };
    
    const comments = this.state.comments.slice();
    
    comments.push(newComment);
    
    this.setState({ comment: "", comments });
  };

  render() {
    return (
      <div>
        {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
        <InputComment
          submitHandler={this.commentSubmit}
          changeHandler={this.commentHandler}
          comment={this.state.comment}
        />
      </div>
    );
  }
}
