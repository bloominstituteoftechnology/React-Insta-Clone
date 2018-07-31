import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";
import unliked from "../../assets/like.png";
import liked from "../../assets/liked.png"
import comment from "../../assets/comment.png";
import moment from "moment";
import "./PostContainer.css";

class PostContainer extends React.Component {
  state = {
    comment: '',
    liked: false,
    likedSrc: unliked
  }

  handleChange = (e) => {
    this.setState({ comment: e.target.value})
  }

  handleAddComment = (e) => {
    if (e.keyCode === 13) {
      this.props.handleAddComment(this.state.comment, this.props.post.id)
      this.setState({ comment: '' })
    }
  }

  handleLikeToggle = () => {
    this.state.liked = !this.state.liked
    if(this.state.liked) {
      this.setState({likedSrc: liked})
    } else {
      this.setState({ likedSrc: unliked})
    }
    this.props.handleLikeToggle(this.state.liked, this.props.post.id);
  }

  render() {
    return (
      <div className="post">
        <div className="post__header">
          <div className="post__header__image">
            <img src={this.props.post.thumbnailUrl} />
          </div>
          <h1> {this.props.post.username} </h1>
        </div>
        <img className="post__main-img" src={this.props.post.imageUrl} />
        <div className="post__text">
          <div className="post__buttons">
            <img
              src={this.state.likedSrc}
              onClick={this.handleLikeToggle} />
            <img src={comment} />
          </div>
          <h1 className="post__likes"> {this.props.post.likes} likes </h1>
          {this.props.post.comments.map(comment => (
            <CommentSection 
              comment={comment} 
              onClick={() => this.props.handleDeleteComment(comment, this.props.post.id)}
            />
          ))}
          <p className="post__date">
            {moment(this.props.post.timestamp, "MMMM Do YYYY, hh:mm:ss")
              .fromNow()
              .toUpperCase()}
          </p>
        </div>
        <div className="add-comment">
          <input
            type="text"
            value={this.state.comment}
            placeholder="Add Comment..."
            onChange={this.handleChange}
            onKeyDown={this.handleAddComment}
          />
        </div>
      </div>
    );
  }
}

PostContainer.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.array,
  }),
};
export default PostContainer;
