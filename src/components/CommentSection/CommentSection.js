import React from "react";
import "./CommentSection.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [...this.props.comments],
      inputText: "",
      likes: this.props.likes,
      liked: false
    };
  }

  changeHandler(event) {
    this.setState({
      comments: this.state.comments,
      inputText: event.target.value
    });
  }

  addNewComment(e) {
    e.preventDefault();
    let newComment = {
      username: localStorage.getItem("username"),
      text: this.state.inputText
    };
    this.setState({
      comments: [...this.state.comments, newComment],
      inputText: ""
    });
    console.log(this.state.comments);
  }

  likePost() {
    if (this.state.liked) {
      this.setState({
        comments: [...this.props.comments],
        inputText: "",
        likes: this.state.likes - 1,
        liked: false
      });
    } else {
      this.setState({
        comments: [...this.props.comments],
        inputText: "",
        likes: this.state.likes + 1,
        liked: true
      });
    }
  }
  render() {
    return (
      <div className="commentSection">
        <div className="footer">
          <div className="footerIcons">
            <button
              onClick={() => {
                console.log(this.state);
                this.likePost();
              }}
              className="likeButton"
            >
              <FontAwesomeIcon icon="heart" />
            </button>
            <FontAwesomeIcon icon="comment" />
          </div>
          <div className="likes">{this.state.likes} likes</div>
        </div>
        <div className="comments">
          {this.state.comments.map(comment => {
            return (
              <div>
                <span className="commentUsername">{comment.username}</span>
                <span className="commentText">{comment.text}</span>
              </div>
            );
          })}
        </div>
        <hr />
        <form
          onSubmit={e => {
            this.addNewComment(e);
          }}
          className="commentForm"
        >
          <input
            onChange={event => this.changeHandler(event)}
            value={this.state.inputText}
            type="text"
            placeholder="Add a comment..."
          />
        </form>
      </div>
    );
  }
}

export default CommentSection;
