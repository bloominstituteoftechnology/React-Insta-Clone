import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import LikeSection from './LikeSection';

import './PostContainer.css';

const STYLE_BASE = "posts-section_";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes,
      liked: false,
    }
  }

  incrementLike = () => {
    const { likes, liked } = this.state;
    this.setState({
      likes: liked ? likes - 1 : likes + 1,
      liked: !liked,
    })
  }

  render() {
    return (
      <div className={`${STYLE_BASE}postContainer`}>
        <PostHeader
          username={this.props.post.username}
          thumbnailUrl={this.props.post.thumbnailUrl}
        />
        <div className={`${STYLE_BASE}postImageContainer`}>
          <img
            alt="post thumbnail"
            className={`${STYLE_BASE}postImage`}
            src={this.props.post.imageUrl}
          />
        </div>
        <LikeSection
          incrementLike={this.incrementLike}
          likes={this.state.likes}
          liked={this.state.liked}
        />
        <CommentSection
          postId={this.props.post.imageUrl}
          comments={this.props.post.comments}
        />
      </div>
    );
  }
};

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string
  })
};

export default Post;