import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSectionContainer';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';
import styled from 'styled-components';

const PostContainer = styled.div `
  width: 640px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 5rem;
  border: 1px solid lightgray;
  border-radius: 5px;
`;

const PostHeaderContainer = styled.div`
  width: 640px;
`;

const PostImageWrapper = styled.div`

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
      <PostContainer>
        <PostHeaderContainer>
          <PostHeader
            username={this.props.post.username}
            thumbnailUrl={this.props.post.thumbnailUrl}
          />
        </PostHeaderContainer>
        <PostImageWrapper>
          <img
            alt="post thumbnail"
            className="post-image"
            src={this.props.post.imageUrl}
          />
        </PostImageWrapper>
        <LikeSection
          incrementLike={this.incrementLike}
          likes={this.state.likes}
        />
        <CommentSection
          postId={this.props.post.imageUrl}
          comments={this.props.post.comments}
        />
      </PostContainer>
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