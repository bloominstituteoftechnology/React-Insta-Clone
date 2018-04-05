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
        <div className="post_header">
          <img className="post_thumb" src={thumbnailUrl} alt="user picture" />
          <h2 className="post_username">{username}</h2>
        </div>
        <img className="post_image" src={imageUrl} alt="Main picture" />
        <div className="post_footer">
          <div className="post_iconbar" />
          <div className="post_likes">{likes} likes</div>
          {/* {comments.map(comment => {
            return <Comments comments={comment} />;
          })} */}
          <Comments comments={comments} />
          <div className="post_timeline">{timestamp}</div>
        </div>
      </div>
    );
  }
}

export default Posts;
