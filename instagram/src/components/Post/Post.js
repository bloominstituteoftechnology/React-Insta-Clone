import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";
import '../Post/Post.css';

class Post extends React.Component {
  render() {
    return (
      <div className="postContainer">
        <div className="postTop">
          <img src={this.props.post.thumbnailUrl} alt="user thumbnail" />
          <div className='topUsername'>{this.props.post.username}</div>
        </div>
        <img src={this.props.post.imageUrl} alt="" className='mainImage' />
        <CommentSection
          comments={this.props.post.comments}
          post={this.props.post}
          dummyData={this.props.dummyData}
          comment={this.props.comment}
          updateComments={this.props.updateComments}
          commentEntries={this.props.commentEntries}
          likes={this.props.likes}
          updateLikes={this.props.updateLikes}
        />
      </div>
    );
  }
}

Post.propTypes = {
  dummyData: PropTypes.arrayOf(
      PropTypes.shape({
          username: PropTypes.string,
          thumbnailUrl: PropTypes.string,
          likes: PropTypes.number,
          timestamp: PropTypes.string,
          comments: PropTypes.arrayOf(
              PropTypes.shape({
                  username: PropTypes.string,
                  text: PropTypes.string,
              })
          ).isRequired
      })
  ).isRequired
};

export default Post;
