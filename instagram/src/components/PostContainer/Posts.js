import React from "react";
import Comments from "../CommentSection/Comments";
import moment from "moment";
import PropTypes from "prop-types";

class Posts extends React.Component {
  handleClick = () => {
    this.props.incrementLikes(this.props.index);
  };

  timestampAgo() {
    return moment(
      this.props.postdata.timestamp,
      "MMMM Do YYYY, h:mm:ss a"
    ).fromNow();
  }
  render() {
    const {
      username,
      thumbnailUrl,
      imageUrl,
      likes,
      timestamp,
      comments
    } = this.props.postdata;
    return (
      <div className="post">
        <div className="post_header">
          <img className="post_thumb" src={thumbnailUrl} alt="user picture" />
          <h2 className="post_username">{username}</h2>
        </div>
        <img className="post_image" src={imageUrl} alt="Main picture" />
        <div className="post_footer">
          <div className="post_iconbar">
            <span className="clickableAwesomeFont" onClick={this.handleClick}>
              <i className="fa fa-heart fa-1x" />
            </span>
            <i className="fa fa-comment fa-1x" />{" "}
            <span className="comment_count">{comments.length}</span>
          </div>
          <div className="post_likes">{likes} likes</div>
          <Comments
            comments={comments}
            key={`${comments[comments.length] + Date.now()}`}
          />
          <div className="post_timeline">{this.timestampAgo()}</div>
        </div>
      </div>
    );
  }
}

Posts.propTypes = {
  postdata: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.array
  })
};

export default Posts;
