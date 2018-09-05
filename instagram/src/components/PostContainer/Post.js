import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
// import LikeSection from './LikeSection';
// import PostHeader from './PostHeader';
// import './Posts.css';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes
    };
  }

  incrementLike = () => {
    let likes = this.state.likes + 1;
    this.setState({ likes });
  };

  render() {
    return (
      <div className="postContainer">
        <div className="postHeader">
          <img src={this.props.post.thumbnailUrl} alt="" />
          <h3>{this.props.post.username}</h3>
        </div>
        <img src={this.props.post.imageUrl} alt="" />
        <CommentSection comments={this.props.post.comments} />
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.shape({
    comments: PropTypes.arrayOf(PropTypes.object),
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }),
};

export default Post;