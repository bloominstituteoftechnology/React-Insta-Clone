import React, { Component } from "react";
import CommentSection from "../CommentSection/CommentSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes,
      liked: false
    };
  }
  addLike = () =>
    this.setState({ likes: this.state.likes + 1, liked: !this.state.liked });
  removeLike = () =>
    this.setState({ likes: this.state.likes - 1, liked: !this.state.liked });
  render() {
    return (
      <div className="post">
        <div className="profile">
          <img
            src={this.props.post.thumbnailUrl}
            alt={this.props.post.username}
            className="profile-picture"
          />
          <span className="username">{this.props.post.username}</span>
        </div>
        <img
          src={this.props.post.imageUrl}
          alt={this.props.post.comments[0].text}
          className="main-img"
        />
        <div className="icons">
          <FontAwesomeIcon
            icon={faHeart}
            style={{ height: "25px", width: "25px", cursor: "pointer" }}
            onClick={!this.state.liked ? this.addLike : this.removeLike}
            id={this.state.liked ? "red" : null}
          />
          <FontAwesomeIcon
            icon={faComment}
            style={{ height: "25px", width: "25px" }}
          />
        </div>
        <p className="likes">{this.state.likes} likes</p>
        <CommentSection
          comments={this.props.post.comments}
          timestamp={this.props.post.timestamp}
        />
      </div>
    );
  }
}
export default Post;
