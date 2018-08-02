import React from 'react';
import PropTypes from 'prop-types';
import './posts.css';
import { PostWrapper, PostImageWrapper } from './PostStyle';

import CommentSection from './../CommentComponents/CommentSection';
import PostHeader from './PostHeader';

const PostContainer = props => {
  return(
    <PostWrapper>
      <PostHeader thumbnail={props.post.thumbnailUrl} user={props.post.username} />
      <PostImageWrapper><img className="fluid-img" alt="post" src={props.post.imageUrl} /></PostImageWrapper>
      <CommentSection key={props.id} id={props.id} username={props.username} comments={props.post.comments} likes={props.post.likes} timestamp={props.post.timestamp}/>
    </PostWrapper>
  );
};

PostContainer.propTypes = {
  post: PropTypes.shape({
    comments: PropTypes.arrayOf(PropTypes.object),
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    thumbnailUrl: PropTypes.string,
    timestamp: PropTypes.string,
    username: PropTypes.string
  })
}

export default PostContainer;
