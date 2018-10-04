import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";
 class Post extends React.Component {
  render() {
    return (
      <div className={"postContainer"}>
        <div className={"postTop"}>
          <img src={this.props.post.thumbnailUrl} />
          <div className={"usernameTop"}>{this.props.post.username}</div>
        </div>
        <img src={this.props.post.imageUrl} />
        <CommentSection
          comments={this.props.post.comments}
          post={this.props.post}
        />
      </div>
    );
  }
}
 Post.propTypes = {
  post: PropTypes.objectOf(
      PropTypes.shape({
          username: PropTypes.string,
          thumbnailUrl: PropTypes.string,
          likes: PropTypes.number,
          timestamp: PropTypes.string,
          comments: PropTypes.objectOf(
              PropTypes.shape({
                  username: PropTypes.string,
                  text: PropTypes.string,
              })
          ).isRequired
      })
  ).isRequired
};
 export default Post;