import React from 'react';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSection';
import Likes from './Likes';
import './PostStyles.css';
import PropTypes from 'prop-types';

class Post extends React.Component {
  // console.log(props)
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes
    }
  }

  addLike = e => {
    e.preventDefault();
    const likes = this.state.likes + 1;
    this.setState({ likes })
  }

  render() {
    return (
      <div className="post-border">
        <PostHeader
          username={this.props.post.username}
          thumbnailUrl={this.props.post.thumbnailUrl}
        />
        <div className="post-image-wrapper">
          <img
            alt="post thumbnail"
            className="post-image"
            src={this.props.post.imageUrl}
          />
        </div>
        <Likes likes={this.state.likes} addLike={this.addLike}/>
        <CommentSection comments={this.props.post.comments} />
      </div>
    );
  };
};

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string
  })
}

export default Post
