import React from "react";
import Comment from "./Comment";
import "./CommentSection.css";
import PropTypes from "prop-types";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import * as moment from "moment";
let now = moment().fromNow();

library.add(faComment, faHeart, faSearch, faEllipsisH);

class CommentSection extends React.Component {
  constructor(props) {
    super();
    this.state = {
      comments: props.comments,
      images: props.image,
      likes: props.likes,
      text: ''
    };
    console.log(this.state);
  }
  addNewComment = e => {
    console.log(e);
    if (this.state.text) {
      this.setState({
        comments: [
          ...this.state.comments,
          {
            username: "iepoch",
            text: this.state.text
          }
        ]
      });
      e.currentTarget.value = null;
    }
  };
  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      if (this.state.text.length >= 1)
        e.preventDefault();
      this.addNewComment(e);
    }
  };
  render() {
    return (
      // Created comment section for each post
      <div className="comment-section">
        <img className="post-img" src={this.state.images} alt=" " />
        <div className="icons-likes">
          <FontAwesomeIcon icon={["far", "heart"]} />{" "}
          <FontAwesomeIcon icon={["far", "comment"]} />
        </div>
        <div className="section likes">{this.state.likes} likes</div>

        {/* Here I mapped the comments and passed them to a new */}
        {this.state.comments.map((comment, index) => {
          return (
            <Comment
              user={comment.username}
              comments={comment.text}
              key={index}
            />
          );
        })}

        {/* The footer of each post will have a time associated with the */}
        <p className="time-moment">{now}</p>
        <form className="form-comment" onSubmit={this.addNewComment}>
          <FontAwesomeIcon className="more-icon" icon={["fas", "ellipsis-h"]} />
          <textarea
            className="add-comment"
            onChange={this.handleChange}
            onKeyDown={this.handleSubmit}
            placeholder="Add comment..."
          />
        </form>
      </div>
    );
  }
}

// Error checking whats passed into the Comment
CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string,
      key: PropTypes.number
    })
  ).isRequired
};

export default CommentSection;
