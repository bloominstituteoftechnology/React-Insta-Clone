import React, { Component } from "react";
import "./CommentSection.css";
import ActualComment from "./Comment";

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comment,
      newComment: "",
      likes: 0
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

addLike = (event) => {
   let newLikes = this.state.likes
   ++newLikes;
    this.setState({ likes: newLikes });
  };
  render() {
    return (
      <div>
        <div className="likeSection">
			<div className="heartIcons">
          <i class="far fa-heart" onClick={this.addLike} />
          <i className="far fa-comment" />
		  </div>
          <p>Likes:{this.state.likes}</p>
        </div>
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
