import React, { Component } from "react";
import "./CommentSection.css";
import ActualComment from "./Comment";

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comment,
      newComment: ""
    };
  }
  commentInput = e => {
    this.setState({ newComment: e.target.value });
  };
  clearForm = () => {
    this.setState({
      newComment: ""
    });
  };
  addNewComment = event => {
    event.preventDefault();
    const empty = "";
    const userName = "Michael";
    const nComment = { text: this.state.newComment, username: userName };
    const commentList = this.state.comments.slice();
    commentList.push(nComment);
    this.setState({
      comments: commentList
    });
	event.target.reset();
  };
  handleSubmit(e){
    e.preventDefault();
    e.target.reset();
}
  render() {
    return (
      <div>
        {this.state.comments.map(item => {
          return (
            <div>
              <ActualComment
                key={Math.random()}
                commentData={item}
                username={"Michael"}
              />
            </div>
          );
        })}
        <p className="postTime">Posted: {this.props.time}</p>

        <div className="addCommentContainer">
          <form onSubmit={this.addNewComment} className="commentForm">
            <input
              onChange={this.commentInput}
              type="text"
              placeholder="Add Comment..."
              className="addComment"
            />
          </form>

          <i className="fas fa-ellipsis-h" />
        </div>
      </div>
    );
  }
}

export default CommentSection;
