import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSectionContainer';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';
import styled from 'styled-components';

import './Posts.css';

const PostBorder = styled.div`
  border: 1px solid #d3d3d3;
  margin: 15px 0;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`;

const PostImage = styled.img`
  width: 100%;
`;

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
      <PostBorder>
        <PostHeader
          username={this.props.post.username}
          thumbnailUrl={this.props.post.thumbnailUrl}
        />
        <PostImage alt="post thumbnail" src={this.props.post.imageUrl} />
        <LikeSection
          incrementLike={this.incrementLike}
          likes={this.state.likes}
        />
        <CommentSection
          postId={this.props.post.imageUrl}
          comments={this.props.post.comments}
        />
      </PostBorder>
    );
  }
}

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string
  })
};

export default Post;