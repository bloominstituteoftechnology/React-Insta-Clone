import React from "react";
import PropTypes from "prop-types";
import CommentSection from "../CommentSection/CommentSection";
import LikeSection from "./LikeSection";
import moment from "moment";

import "./Posts.css";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes,
      dTime: ''
    };
  }

  componentDidMount = () => {
    let currentTime = moment();
    let tStamp = this.props.post.timestamp;
    tStamp = tStamp.replace("th", "");
    let tStamp2 = moment(tStamp);
    let displayTime = tStamp2.from(currentTime);
    this.setState({ dTime: displayTime });
  };

  incrementLike = () => {};
  render() {
    return (
      <div className="post-border">
        <div className="post-header">
          <div className="post-thumb-wrapper">
            <img
              alt="post header"
              className="post-thumb"
              src={this.props.post.thumbnailUrl}
            />
          </div>
          <div>{this.props.post.username}</div>
        </div>
        <div className="post-image-wrapper">
          <img
            alt="post thumbnail"
            className="post-image"
            src={this.props.post.imageUrl}
          />
        </div>
        <LikeSection
          incrementLike={this.incrementLike}
          likes={this.state.likes}
        />
        <CommentSection
          postId={this.props.post.imageUrl}
          comments={this.props.post.comments}
          dTime={this.state.dTime}
        />
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string
  })
};

export default Post;
