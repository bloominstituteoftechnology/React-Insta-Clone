import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSectionContainer';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';

import './PostContainer.css';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.data.likes
    };
  }
  incrementLike = () => {
    let likes = this.state.likes + 1;
    this.setState({ likes });
  };
  render() {
    return (
      <div className="post-border">
        <PostHeader
          username={this.props.data.username}
          thumbnailUrl={this.props.data.thumbnailUrl}
        />
        <div className="post-image-wrapper">
          <img
            alt="post thumbnail"
            className="post-image"
            src={this.props.data.imageUrl}
          />
        </div>
        <LikeSection
          incrementLike={this.incrementLike}
          likes={this.state.likes}
        />
        <CommentSection
          postId={this.props.data.imageUrl}
          comments={this.props.data.comments}
        />
      </div>
    );
  }
}

Post.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string
  })
};

export default Post;