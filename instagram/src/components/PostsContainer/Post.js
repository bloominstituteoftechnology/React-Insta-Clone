import React from 'react';
import PropTypes from "prop-types";
import './PostsContainer.css';
import CommentSection from '../CommentSection/CommentSection';

class Post extends React.Component {
  state = {
    likes: this.props.post.likes,
    liked: false
  };

  handleLike = () => {
    let likes = this.state.likes;
    let liked = this.state.liked;

    if (liked) {
      likes--;
      liked = false;
    } else {
      likes++;
      liked = true;
    }
    this.setState({ liked, likes });
  };

  render() {
    return (
      <div className="post-container">
        <div className="post-header-container">
          <img src={this.props.post.thumbnailUrl} alt={"Profile thumbnail."} />
          <div className="username">{this.props.post.username}</div>
        </div>
        <img src={this.props.post.imageUrl} alt={"Post."} />
        <div className="post-icons-and-comments-container">
          <div className="post-icons-container">
            <i onClick={this.handleLike}
               style={this.state.liked ? { color: 'red' } : null}
               className={'fa-heart likes-heart ' + (this.state.liked ? 'fas' : 'far')}>
            </i>
            <i className="far fa-comment"></i>
          </div>
          <p>{this.state.likes} likes</p>
          <CommentSection post={this.props.post} />
        </div>
      </div>
    );
  }
};

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.object)
  })
};

export default Post;
