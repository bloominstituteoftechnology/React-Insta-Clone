import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSectionContainer';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';
import './PostContainer.css';
import styled from 'styled-components';


const PostBorder = styled.div`
  border: 1px solid #D3D3D3;
  margin: 15px 0;
  `;

const PostImage = styled.img`
  width: 50%;
`;


class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes
    };
  }

  incrementLike = () => {
    let likes = this.state.likes + 1;
    this.setState({ likes});
  };

  render() {
    return (
      <PostBorder>
        <PostHeader
        username={this.props.post.username}
        thumbnailUrl={this.props.post.thumbnailUrl}
        />

        <PostImage alt='post thumbnail' src={this.props.post.imageUrl} />
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

PostContainer.propType = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string
  })
};

export default PostContainer;