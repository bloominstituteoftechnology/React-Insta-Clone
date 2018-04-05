import React from "react";
import Comments from "../CommentSection/Comments";

class Posts extends React.Component {
  handleClick = () => {
    this.props.incrementLikes(this.props.index);
  };
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
            <i className="fa fa-comment fa-1x" />
          </div>
          <div className="post_likes">{likes} likes</div>
          <Comments comments={comments} />
          <div className="post_timeline">{timestamp}</div>
        </div>
      </div>
    );
  }
}

export default Posts;
