import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";
import unliked from "../../assets/like.png";
import liked from "../../assets/liked.png";
import comment from "../../assets/comment.png";
import moment from "moment";
import "./PostContainer.css";

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.state = {
      comment: "",  
    };
  }
  handleChange = e => {
    this.setState({ comment: e.target.value });
  };

  handleAddComment = e => {
    if (e.keyCode === 13 && this.state.comment) {
      this.props.handleAddComment(this.state.comment, this.props.post.id);
      this.setState({ comment: "" });
    }
  };

  focusTextInput = () => {
    this.textInput.current.focus();
  }
  render() {
    return (
      <div className="post">
        <div className="post__header">
          <div className="post__header__image">
            <img src={this.props.post.thumbnailUrl} alt="thumbnail" />
          </div>
          <h1> {this.props.post.username} </h1>
        </div>
        <img
          className="post__main-img"
          src={this.props.post.imageUrl}
          alt="main"
        />
        <div className="post__text">
          <div className="post__buttons">
            <img
              src={this.props.post.liked ? liked : unliked}
              onClick={() => this.props.handleLikeToggle(this.props.post.id)}
              alt="liked"
            />
            <img src={comment} alt="comment" onClick={this.focusTextInput} />
          </div>
          <h1 className="post__likes"> {this.props.post.likes} likes </h1>
          {this.props.post.comments.map((comment, index) => (
            <CommentSection
              username={this.props.username}
              key={index}
              comment={comment}
              onClick={() =>
                this.props.handleDeleteComment(comment.id, this.props.post.id)
              }
            />
          ))}
          <p className="post__date">
            {moment(this.props.post.timestamp, "MMMM Do YYYY, hh:mm:ss")
              .fromNow()
              .toUpperCase()}
          </p>
        </div>
        <div className="add-comment">
          <input
            ref={this.textInput}
            type="text"
            value={this.state.comment}
            placeholder="Add a comment..."
            onChange={this.handleChange}
            onKeyDown={this.handleAddComment}
          />
        </div>
      </div>
    );
  }
}

PostContainer.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.array,
  }),
};
export default PostContainer;
