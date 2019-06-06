import React from 'react';
import PostHead from './PostHead';
import PropTypes from 'prop-types';
import LikeSection from './LikeSection';
import CommentSection from '../CommentSection/CommentSectionContainer';


class Post extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        likes: props.post.likes
      }
    };

    incrementLike = () => {
      this.setState(prevState => ({ likes: prevState.likes + 1 }));
      
    }

    render() {
      return (
      <div className="post-border">
        <PostHead
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
        <LikeSection incrementLike={this.incrementLike} likes={this.state.likes} />
        <CommentSection comments={this.props.post.comments} />
      </div>
    );

};
}

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string
  })
};

export default Post;