import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import heart from "./heart.png";
import comment from "./comment.png";
import PropTypes from "prop-types";
import "./PostContainer.css";

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: props.dummyData,
      likes: props.dummyData.likes
    };
  }

  addLikes = (event, i) => {
    event.preventDefault();
    let likes = this.state.likes;
    likes += 1;
    this.setState({ likes });
  };

  render() {
    return (
      <div className="post-container">
        <div className="header-container">
          <img
            className="user-thumbnail"
            src={this.state.dummyData.thumbnailUrl}
            alt="user Thumbnail"
          />
          <p>{this.state.dummyData.username}</p>
        </div>

        <div>
          <img
            className="post-image"
            src={this.state.dummyData.imageUrl}
            alt="post"
          />
        </div>
        <div>
          <div className="post-icons">
            <img
              onClick={this.addLikes}
              className="heart-icon"
              src={heart}
              alt="heart"
            />
            <img className="comment-icon" src={comment} alt="comment" />
          </div>

          <p className="user-likes">{this.state.likes} Likes</p>
          <CommentSection dummyData={this.state.dummyData.comments} />
        </div>
      </div>
    );
  }
}

PostContainer.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      imageUrl: PropTypes.string,
      likes: PropTypes.number
    })
  )
};

export default PostContainer;
