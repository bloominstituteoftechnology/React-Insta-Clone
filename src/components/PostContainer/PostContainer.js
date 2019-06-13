import React, { Component } from "react";
import "./PostContainer.scss";
import CommentSection from "../CommentSection/CommentSection";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";

import * as moment from "moment";

class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: this.props.post.likes,
      pressed: false
    };
  }

  toggleLike = () => {
    if (this.state.pressed === false) {
      this.setState(prevState => {
        return {
          likes: prevState.likes + 1,
          pressed: true
        };
      });
    } else {
      this.setState(prevState => {
        return {
          likes: prevState.likes - 1,
          pressed: false
        };
      });
    }
  };

  render() {
    return (
      <div className="postContainer">
        <span className="user">
          <img
            className="profileImg"
            src={this.props.post.thumbnailUrl}
            alt="profileimg"
          />{" "}
          <p className="username">{this.props.post.username}</p>
        </span>
        <img src={this.props.post.imageUrl} alt="postImg" />
        <br />
        <span className="icons">
          {" "}
          <span onClick={this.toggleLike}>
            <FontAwesomeIcon icon={faHeart} />
          </span>
          &nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon icon={faComment} />
        </span>
        <br />
        <span className="likes">{this.state.likes} likes</span>
        <CommentSection comments={this.props.post.comments} />
        <p className="time">
          {moment(this.props.post.timestamp, "LLL").fromNow()}
        </p>
      </div>
    );
  }
}

export default PostContainer;
