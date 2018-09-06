import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import LikeSection from './LikeSection';
import './PostContainer.css';

const Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes;
    };
  }

  incrementLike = () => {
    this.setState(state => ({ likes: (state.likes += 1) }));
  };

  render() {
    return (
      <div className = 'post-border'>
        <PostHeader username = {this.props.post.username} thumbnailUrl = {this.props.post.thumbnailUrl} />

        <div className = 'post-img-wrapper'>
          <img alt = 'Thumbnail' className = 'post-img' src = {this.props.post.imageUrl} />
        </div>

        <LikeSection incrementLike = {this.incrementLike} likes = {this.state.likes} />

        <CommentSection postId = {this.props.post.imageUrl} comments = {this.props.post.comments} />
      </div> // post border
    );
  }
}

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string
  }),
};

export default Post;
