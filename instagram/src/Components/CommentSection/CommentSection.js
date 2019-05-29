import React, { Component } from "react";

class CommentSection extends Component {
  state = {
    commentValue: ""
  };
  
  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.addComment(this.state.commentValue, this.props.id);
    this.setState({
      commentValue: ""
    });
  };

  render() {
    return (
      <div>
        {this.props.comments.map(comment => (
          <div key={comment.id}>
            <strong>{comment.username} </strong>
            {comment.text}
          </div>
        ))}
        <form id={this.props.id} onSubmit={this.submitHandler}>
          <input
            onChange={this.changeHandler}
            name="commentValue"
            type="text"
            placeholder="... Add Comment"
            value={this.state.commentValue}
          />
        </form>
      </div>
    );
  }
}

export default CommentSection;
