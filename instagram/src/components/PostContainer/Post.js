import React from 'react';
import PostHeader from './PostHeader';
import PostImage from './PostImage';
import PostActions from './PostActions';
import PostLikes from './PostLikes';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PostLi = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 600px;
  width: 100%;
  margin: 0 0 40px 0;
  border: 1px solid #e2e2e2;
  font-size: 1.4rem;
`;

const Post = (props) => {
  return(
    <PostLi>
      <PostHeader thumbnail={props.postData.thumbnailUrl} username={props.postData.username} />
      <PostImage imageUrl={props.postData.imageUrl} />
      <PostActions addLike={props.addLike} postIndex={props.postIndex} />
      <PostLikes likes={props.postData.likes} />
      <CommentSection comments={props.postData.comments} timestamp={props.postData.timestamp} addNewComment={props.addNewComment} postIndex={props.postIndex} />
    </PostLi>
  );
};

Post.propTypes = {
  postData: PropTypes.shape({
    comments: PropTypes.array.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  })
};

export default Post;