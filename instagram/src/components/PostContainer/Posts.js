import React from "react";
import Comments from "../CommentSection/Comments";

class Posts extends React.Component {
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
        <div className="postheader">
          <img className="thumb" src={thumbnailUrl} />
          <h2 className="username">{username}</h2>
        </div>
        <div className="banner">
          <img className="heroimg" src={imageUrl} />
          <span className="likes">{likes}</span>
          {/* {comments.map(comment => {
            return <Comments comments={comment} />;
          })} */}
          <Comments comments={comments} />
          <span className="timestamp">{timestamp}</span>
        </div>
      </div>
    );
  }
}

export default Posts;
